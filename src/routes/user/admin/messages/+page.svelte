<script>
    import Message from "$lib/Message.svelte";

    export let data;
</script>

{#each data.msgs as msg}
    <Message {msg} />
{:else}
    No messsage
{/each}
