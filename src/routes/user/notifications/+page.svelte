<script>
    import Notification from "$lib/Notification.svelte";
    export let data;
</script>

<div
    class={`mt-5 grid place-content-center gap-5 ${
        data.notices.length > 0 ? "sm:grid-cols-2 md:grid-cols-3" : ""
    }`}
>
    {#if data.notices.length > 0}
        {#each data.notices as notice}
            <Notification {notice} />
        {/each}
    {:else}
        No Notifications
    {/if}
</div>
