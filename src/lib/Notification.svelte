<script>
    import { enhance } from "$app/forms";
    import { page } from "$app/stores";
    import EditNotice from "./EditNotice.svelte";
    export let notice;
</script>

<div class="p-3 bg-base-200 rounded-lg min-w-[20rem]">
    <h3 class="text-xl font-bold flex justify-between items-center">
        {notice.title}
        <div class="flex gap-3">
            {#if notice.author == $page.data.user.id || $page.data.user.role == "admin"}
                <EditNotice id={notice.id} {notice} />
                <form method="post" action="?/deleteNotice" use:enhance>
                    <input type="hidden" name="id" value={notice.id} />
                    <button class="text-red-500"
                        ><svg
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
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                        </svg>
                    </button>
                </form>
            {/if}
        </div>
    </h3>
    <p class="mb-5">{notice.description}</p>
</div>
