export const actions = {
    password: async ({ locals }) => {
        try {
            let result = await locals.pb.collection('users').requestPasswordReset(locals.user.email);
            console.log(result, 'try')
        } catch (error) {
            console.log(error)
        }

    }
}