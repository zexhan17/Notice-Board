export const load = ({ locals }) => {
    if (locals.user) {
        return { user: JSON.parse(JSON.stringify(locals.user)), auth: true }
    }
    return { auth: false }
}