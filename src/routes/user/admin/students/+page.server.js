import { fail } from '@sveltejs/kit';

export const load = async ({ locals }) => {
    try {
        let students = await locals.pb.collection('users').getFullList({ filter: 'role = "student"' });
        students = JSON.parse(JSON.stringify(students))

        return {
            success: true,
            students,
        }
    } catch (error) {
        return fail(400, {
            error: true,
            msg: "server error can't fetch"
        })
    }

}

export const actions = {
    active: async ({ request, locals }) => {
        const formdata = await request.formData();
        const id = formdata.get('id');

        try {
            const record = await locals.pb.collection('users').update(id, { active: true });
            return {
                success: true,
                msg: 'Success!'
            }
        } catch (error) {
            console.log(error)
            return {
                error: true,
                msg: error,
            }
        }

    },
    deactive: async ({ request, locals }) => {
        const formdata = await request.formData();
        const id = formdata.get('id');

        try {
            const record = await locals.pb.collection('users').update(id, { active: false });
            return {
                success: true,
                msg: 'Success!'
            }
        } catch (error) {
            console.log(error)
            return {
                error: true,
                msg: error,
            }
        }

    },
    deleteUser: async ({ request, locals }) => {
        const data = await request.formData();
        const id = data.get('id');
        try {
            await locals.pb.collection('users').delete(id);
            return {
                success: true,
                msg: 'deleted 🗑️'
            }
        } catch (error) {
            return {
                error: true,
                msg: 'server error'
            }
        }
    },
    updateUser: async ({ request, locals }) => {
        const data = await request.formData();

        if (locals.user.role == 'student') {
            let img = data.get('avatar');
            if (img.size == 0) {
                data.delete('avatar')
            }
        }

        try {
            const res = await locals.pb.collection('users').update(data.get('id'), data);
            return {
                success: true,
                msg: "updated"
            }
        } catch (error) {
            console.log(error)
            return {
                error: true,
                msg: "server error can't update"
            }
        }
    }
}