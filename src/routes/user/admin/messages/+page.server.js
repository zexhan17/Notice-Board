
export async function load({ locals }) {
    try {
        let msgs = await locals.pb.collection('msgs').getFullList();
        msgs = JSON.parse(JSON.stringify(msgs))
        return {
            success: true,
            msgs,
        }
    } catch (error) {
        return {
            error: true,
            msg: 'server error'
        }
    }
};

export const actions = {
    deleteMsg: async ({ locals, request }) => {
        const formData = await request.formData();
        const id = formData.get('id')

        try {
            await locals.pb.collection('msgs').delete(id);
            return {
                success: true,
                msg: 'success'
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