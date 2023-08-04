<script>
    import { enhance } from "$app/forms";
    import { depts } from "$lib/menuList";
    export let id;
    export let user;
</script>

<label for={`${id}e`} class="cursor-pointer underline">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
        />
    </svg>
</label>

<input type="checkbox" id={`${id}e`} class="modal-toggle" />
<div class="modal">
    <div class="modal-box">
        <form
            action="?/updateUser"
            enctype="multipart/form-data"
            method="post"
            use:enhance
        >
            <div class="form-control w-full">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="label">
                    <span class="label-text">Name</span>
                </label>
                <input
                    type="text"
                    name="name"
                    value={user.name}
                    placeholder="Type here"
                    class="input input-bordered"
                />
            </div>
            <div class="form-control w-full">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="label">
                    <span class="label-text">Deparment</span>
                </label>
                <select
                    class="select select-bordered"
                    value={user.dept}
                    name="dept"
                >
                    <option disabled selected>Pick your department</option>
                    {#each depts as dept}
                        <option value={dept}>{dept}</option>
                    {/each}
                </select>
            </div>

            {#if user.role == "teacher"}
                <div class="form-control w-full">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label class="label">
                        <span class="label-text">Role</span>
                    </label>
                    <select
                        class="select select-bordered"
                        value={user.role}
                        name="role"
                    >
                        <option
                            value="teacher"
                            selected={user.role == "teacher"}>Teacher</option
                        >
                        <option value="admin" selected={user.role == "admin"}
                            >Admin</option
                        >
                    </select>
                </div>
            {/if}

            {#if user.role == "student"}
                <div class="form-control w-full">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label class="label">
                        <span class="label-text">Roll no</span>
                    </label>
                    <input
                        type="number"
                        name="rollNo"
                        value={user.rollNo}
                        placeholder="Type here"
                        class="input input-bordered"
                    />
                </div>

                <div class="form-control w-full">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label class="label">
                        <span class="label-text">Year of joining</span>
                    </label>
                    <input
                        type="number"
                        name="session"
                        value={user.session}
                        placeholder="Type here"
                        class="input input-bordered"
                    />
                </div>

                <div class="form-control w-full">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label class="label">
                        <span class="label-text">College Card Picture</span>
                    </label>
                    <input
                        type="file"
                        accept="image/png, image/jpeg"
                        class="file-input file-input-bordered"
                        name="avatar"
                    />
                </div>
            {/if}
            <input type="hidden" name="id" value={user.id} />
            <button class="btn w-full mt-5">update</button>
        </form>
    </div>
    <label class="modal-backdrop" for={`${id}e`}>Close</label>
</div>
