import { json } from '@sveltejs/kit';
export async function POST({ locals, request }) {
    const { id } = await request.json();

    const sender = await locals.pb.collection('users').getOne(id);

    return json({ sender }, { status: 201 });
};