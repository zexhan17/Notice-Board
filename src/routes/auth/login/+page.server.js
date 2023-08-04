import { fail, redirect } from '@sveltejs/kit';

export const actions = {
    default: async ({ locals, request }) => {
        const formData = await request.formData();

        const email = formData.get('email')
        const password = formData.get('password')
        if (email == "" || password == "") {
            return fail(400, {
                error: true,
                msg: "Fields required"
            })
        }
        let res;
        try {
            res = await locals.pb.collection('users').authWithPassword(
                email,
                password
            );
        } catch (error) {
            console.log(error)
            return fail(400, {
                error: true,
                msg: "server error"
            })
        }

        if (res.record.active == false) {
            locals.pb.authStore.clear()
            locals.user = undefined
            return fail(400, {
                error: true,
                msg: "Visit admin"
            })
        }

        throw redirect(303, '/user/notifications');
    }
}