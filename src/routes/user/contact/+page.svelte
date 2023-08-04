<script>
    import { enhance } from "$app/forms";
    import { Toaster, toast } from "svelte-sonner";
    export let form;
</script>

<div class="grid place-content-center">
    <form method="post" use:enhance class="w-72 sm:w-96 space-y-3">
        <span class="block">Your message to admin</span>
        <textarea
            class="textarea textarea-bordered block w-full"
            rows="8"
            placeholder="Tpe here"
            name="message"
            value={form?.message ?? ""}
        />
        <button class="btn w-full">send</button>
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
