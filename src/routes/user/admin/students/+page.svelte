<script>
    import { enhance } from "$app/forms";
    import { Toaster, toast } from "svelte-sonner";
    import StuDetailModal from "$lib/StuDetailModal.svelte";
    import Edit from "$lib/Edit.svelte";

    export let form;
    export let data;

    let search;
    let list = data.students;
    let checked = false;

    $: if (search) {
        list = list.filter((f) => f.rollNo.includes(search));
    } else {
        list = data.students;
    }

    $: if (checked) {
        list = list.filter((f) => f.verified == false);
    } else {
        list = data.students;
    }
</script>

<div class="md:flex justify-between items-center space-y-4">
    <input
        type="number"
        bind:value={search}
        placeholder="Search by roll number here"
        class="input input-bordered w-full mt-5 max-w-sm"
    />
    <div class="form-control">
        <label class="label cursor-pointer gap-4">
            <span class="label-text">show non verified students</span>
            <input type="checkbox" bind:checked class="checkbox" />
        </label>
    </div>
</div>

<div class="overflow-x-auto mt-5">
    <table class="table">
        <!-- head -->
        <thead>
            <tr>
                <th />
                <th>Department</th>
                <th>Session</th>
                <th>Roll No</th>
                <th>Name</th>
                <th>Active</th>
            </tr>
        </thead>
        <tbody>
            {#if list}
                {#each list as s, i}
                    <tr class="hover">
                        <td>{i + 1}</td>
                        <td>{s.dept}</td>
                        <td>{s.session}</td>
                        <td>{s.rollNo}</td>
                        <td>
                            <StuDetailModal id={i} user={s} />
                        </td>
                        <td>
                            <form
                                action={s.active ? "?/deactive" : "?/active"}
                                method="post"
                                use:enhance
                            >
                                <input type="hidden" name="id" value={s.id} />
                                <input
                                    type="hidden"
                                    name="active"
                                    value={s.active}
                                />
                                <button class="btn btn-xs">{s.active}</button>
                            </form>
                        </td>
                        <td>
                            <Edit id={i} user={s} />
                        </td>
                        <td class="sm:hidden">{i + 1}</td>
                    </tr>
                {/each}
            {/if}
        </tbody>
    </table>
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
