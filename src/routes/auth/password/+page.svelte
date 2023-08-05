<script>
    import { fade } from "svelte/transition";
    let step = 1;
</script>

<h1 class="mt-10 text-xl">Change Password</h1>
<div class="grid place-content-center pt-10">
    {#if step == 1}
        <button on:click={() => (step = 2)} class="btn">send code</button>
    {/if}
    {#if step == 2}
        <div transition:fade>
            <input
                class="input input-bordered w-full"
                type="number"
                placeholder="enter code"
                required
            />
            <button on:click={() => (step = 3)} class="mt-4 btn w-full"
                >verify</button
            >
        </div>
    {/if}
    {#if step == 3}
        <div transition:fade class="space-y-4">
            <input
                type="number"
                class="input input-bordered block"
                placeholder="new password"
                required
            />
            <input
                type="number"
                required
                class="input input-bordered block"
                placeholder="confirm new password"
            />
            <button on:click={() => (step = 1)} class="btn w-full"
                >send code</button
            >
        </div>
    {/if}
</div>
