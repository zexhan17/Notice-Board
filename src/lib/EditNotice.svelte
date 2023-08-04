<script>
    import { enhance } from "$app/forms";
    import { depts } from "./menuList";

    export let id;
    export let notice;
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
            action="?/updateNotice"
            enctype="multipart/form-data"
            method="post"
            use:enhance
        >
            <h3 class="text-xl font-bold text-center">Update Notification</h3>
            <div class="form-control">
                <label class="label">
                    <span class="label-text">Title</span>
                </label>
                <input
                    type="text"
                    name="title"
                    value={notice?.title ?? ""}
                    placeholder="Type here"
                    class="input input-bordered w-full"
                />
            </div>
            <div class="form-control">
                <label class="label">
                    <span class="label-text">Description</span>
                </label>
                <textarea
                    name="description"
                    value={notice?.description ?? ""}
                    class="textarea textarea-bordered h-48"
                    placeholder="Type here"
                />
            </div>
            <div class="form-control w-full">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="label">
                    <span class="label-text"
                        >Deparment, leave empty if it is for whole college</span
                    >
                </label>
                <select
                    class="select select-bordered"
                    value={notice?.dept ?? ""}
                    name="dept"
                >
                    <option disabled selected>Pick your department</option>
                    {#each depts as dept}
                        <option value={dept}>{dept}</option>
                    {/each}
                </select>
            </div>
            <div class="form-control w-full">
                <label class="label">
                    <span class="label-text">Starting session</span>
                </label>
                <input
                    type="number"
                    name="session"
                    value={notice?.session ?? ""}
                    placeholder="Leave empty if it is for whole department"
                    class="input input-bordered w-full"
                />
            </div>
            <input type="hidden" name="id" value={notice.id} />
            <button class="btn w-full mt-5">update</button>
        </form>
    </div>
    <label class="modal-backdrop" for={`${id}e`}>Close</label>
</div>
