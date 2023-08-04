export const load = async ({ locals }) => {

    const role = locals.user.role;

    try {
        let notices;

        if (role == "student") {
            notices = await locals.pb.collection('notice').getFullList({
                filter: `session = ${locals.user.session} && dept = "${locals.user.dept}"`,
            });

            let temp = await locals.pb.collection('notice').getFullList({
                filter: 'dept = "" || session = 0',
            });

            notices = [...notices, ...temp]

        } else if (role == 'teacher') {
            notices = await locals.pb.collection('notice').getFullList({
                filter: `dept = "${locals.user.dept}" || dept = "" || author = "${locals.user.id}"`,
            });
        } else {
            notices = await locals.pb.collection('notice').getFullList();
        }
        notices = JSON.parse(JSON.stringify(notices));


        return { notices }

    } catch (error) {
        console.log(error)
    }
}

export const actions = {
    deleteNotice: async ({ locals, request }) => {
        const formData = await request.formData();

        try {
            await locals.pb.collection('notice').delete(formData.get('id'));
            return {
                success: true,
                msg: 'DELETED'
            }
        } catch (error) {
            return {
                error: true,
                msg: "server error, can't delete"
            }
        }
    },
    updateNotice: async ({ locals, request }) => {
        const formData = await request.formData();

        try {
            await locals.pb.collection('notice').update(formData.get('id'), formData);
            return {
                success: true,
                msg: 'updated'
            }
        } catch (error) {
            return {
                error: true,
                msg: "server error, can't update"
            }
        }
    }
}