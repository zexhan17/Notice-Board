export const actions = {
    default: async ({ locals, request }) => {
        const formData = await request.formData();
        formData.append('author', locals.user.id);

        try {
            const record = await locals.pb.collection('notice').create(formData);
            return {
                success: true,
                msg: 'Success!'
            }
        } catch (error) {
            console.log(error)
            return {
                error: true,
                msg: 'server error'
            }
        }
    }
}