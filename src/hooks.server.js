import PocketBase from 'pocketbase';
import { PUBLIC_PB } from '$env/static/public';
import { redirect } from '@sveltejs/kit';

export async function handle({ event, resolve }) {
    event.locals.pb = new PocketBase(PUBLIC_PB);

    // load the store data from the request cookie string
    event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

    if (!event.locals.pb.authStore.isValid && event.url.pathname.startsWith('/user')) {
        throw redirect(303, '/auth/login');
    }

    // route authorization
    if (event.locals.pb.authStore.isValid) {
        const role = event.locals.pb.authStore.model.role;
        const pathname = event.url.pathname;

        if (pathname.startsWith('/auth')) {
            throw redirect(303, `/user/notifications`)
        }

        if (role == "student") {
            if (pathname.startsWith('/user/admin') || pathname.startsWith('/user/create')) {
                throw redirect(303, `/user/notifications`)
            }
        }

        if (role == "teacher" && pathname.startsWith('/user/admin')) {
            throw redirect(303, `/user/notifications`)
        }
    }

    if (event.locals.pb.authStore.isValid) {
        event.locals.user = event.locals.pb.authStore.model
    }

    try {
        // get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
        event.locals.pb.authStore.isValid && await event.locals.pb.collection('users').authRefresh();
    } catch (_) {
        // clear the auth store on failed refresh
        event.locals.pb.authStore.clear();
    }

    const response = await resolve(event);

    // send back the default 'pb_auth' cookie to the client with the latest store state
    response.headers.append('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }));

    return response;
}