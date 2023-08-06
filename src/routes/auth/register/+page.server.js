import { fail, redirect } from '@sveltejs/kit';

export const actions = {
    default: async ({ locals, request }) => {
        const formData = await request.formData();
        formData.append("emailVisibility", true)
        const data = Object.fromEntries([...formData])

        const { name, email, password, passwordConfirm, dept, role, rollNo, avatar, session } = data;

        if (name == "" || email == "" || password == "" || passwordConfirm == "" || dept == "" || role == "") {
            return fail(
                400,
                {
                    name, email, dept, role, rollNo, avatar, session,
                    error: true,
                    msg: "fields are empty"
                }
            )
        }

        if (role == "student" && avatar == "" || rollNo == "" || session == "") {
            return fail(
                400,
                {
                    name, email, dept, role, rollNo, avatar, session,
                    error: true,
                    msg: "fields are empty"
                }
            )
        }

        if (password != passwordConfirm || password.length < 8) {
            return fail(
                400,
                {
                    name, email, dept, role, rollNo, avatar,
                    error: true,
                    msg: "password should match and length should be 8"
                }
            )
        }

        try {
            await locals.pb.collection('users').create(formData);
        }
        catch {
            return {
                error: true,
                msg: "server error, contact admin or try again later"
            }
        }
        throw redirect(303, '/auth/login')
    }
}
