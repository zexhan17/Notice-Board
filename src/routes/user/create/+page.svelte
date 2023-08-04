<script>
    import { Toaster, toast } from "svelte-sonner";
    import { depts } from "$lib/menuList.js";
    import { enhance } from "$app/forms";

    export let form;
</script>

<div class="grid place-content-center pt-5">
    <form method="post" use:enhance class="w-72 sm:w-96 md:w-[40rem]">
        <h3 class="text-xl font-bold text-center">Create Notification</h3>
        <div class="form-control">
            <label class="label">
                <span class="label-text">Title</span>
            </label>
            <input
                type="text"
                name="title"
                value={form?.title ?? ""}
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
                value={form?.description ?? ""}
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
                value={form?.dept ?? ""}
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
                value={form?.session ?? ""}
                placeholder="Leave empty if it is for whole department"
                class="input input-bordered w-full"
            />
        </div>
        <div class="form-control w-full mt-5">
            <button class="btn">Create</button>
        </div>
    </form>
</div>

<Toaster position="top-center" expand={true} richColors />
<div class="hidden">
    {#if form?.error == true}
        {toast.error(form?.msg)}
    {/if}
    {#if form?.success == true}
        {toast.success(form?.msg)}
    {/if}
</div>
