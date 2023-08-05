<script>
    import { enhance } from "$app/forms";
    import { Toaster, toast } from "svelte-sonner";

    export let form;
</script>

<div class="grid place-content-center mt-10">
    <form
        use:enhance
        method="post"
        class="rounded-xl shadow-2xl p-5 w-80 md:w-96"
    >
        <div class="form-control w-full">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="label">
                <span class="label-text">Email</span>
            </label>
            <input
                type="email"
                name="email"
                value={form?.email ?? ""}
                placeholder="Type here"
                class="input input-bordered"
            />
        </div>
        <div class="form-control w-full">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="label">
                <span class="label-text">Password</span>
            </label>
            <input
                type="password"
                name="password"
                placeholder="Type here"
                class="input input-bordered"
            />
        </div>
        <div class="mt-3 ml-1">
            <a class="hover:underline" href="/auth/password">Forget Password?</a
            >
        </div>
        <button class="btn w-full mt-5">login</button>
        <div class="mt-3 ml-1">
            Don't have an account? <a class="text-info" href="/auth/register"
                >Register</a
            >
        </div>
    </form>
</div>

<Toaster position="top-center" expand={true} richColors />
<div class="hidden">
    {#if form?.error == true}
        {toast.error(form?.msg)}
    {/if}
</div>
