export const actions = {
    default: async ({ locals, request }) => {
        const formData = await request.formData();
        const message = formData.get('message');
        if (message.length < 1) {
            return {
                error: true,
                msg: 'khali msg bhejty sharam ni ati ?? 😠'
            }
        }

        const data = {
            msg: message,
            sender: locals.user.id
        }

        try {
            await locals.pb.collection('msgs').create(data);
            return {
                success: true,
                msg: "success"
            }
        } catch (error) {
            return {
                message,
                error: true,
                msg: "serever error, can't send"
            }
        }
    }
}