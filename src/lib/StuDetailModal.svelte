<script>
    import { PUBLIC_PB } from "$env/static/public";
    import { enhance } from "$app/forms";
    export let id;
    export let user;
</script>

<label for={id} class="cursor-pointer underline">{user.name}</label>

<input type="checkbox" {id} class="modal-toggle" />
<div class="modal">
    <div class="modal-box">
        <div class="md:flex gap-4">
            <img
                class="w-64"
                src={`${PUBLIC_PB}/api/files/_pb_users_auth_/${user.id}/${user.avatar}`}
                alt="clg card"
            />
            <div
                class="flex flex-col space-y-2 md:space-y-0 mt-2 md:mt-0 justify-between min-w-fit"
            >
                <p
                    class="bg-base-200 flex justify-between py-2 px-3 rounded-md"
                >
                    Name: <b>{user.name} </b>
                </p>
                <p
                    class="bg-base-200 flex justify-between py-2 px-3 rounded-md"
                >
                    Roll No: <b>{user.rollNo}</b>
                </p>
                <p
                    class="bg-base-200 flex justify-between py-2 px-3 rounded-md"
                >
                    Department: <b>{user.dept} </b>
                </p>
                <p
                    class="bg-base-200 flex justify-between py-2 px-3 rounded-md"
                >
                    Session: <b>{user.session}</b>
                </p>
                <p
                    class="bg-base-200 flex justify-between py-2 px-3 rounded-md"
                >
                    Email: <b class="ml-2">{user.email}</b>
                </p>
                <p
                    class="bg-base-200 flex justify-between py-2 px-3 rounded-md"
                >
                    Active: <b>{user.active}</b>
                </p>
            </div>
        </div>
        <div class="flex justify-between mt-3 items-center">
            <form action="?/deleteUser" method="post" use:enhance>
                <input type="hidden" name="id" value={user.id} />
                <button class="btn btn-sm text-red-500">
                    DELETE USER
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                        title="delete user"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                    </svg>
                </button>
            </form>
        </div>
    </div>
    <label class="modal-backdrop" for={id}>Close</label>
</div>
