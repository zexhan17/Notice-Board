<script>
    import { page } from "$app/stores";
    import Items from "./Items.svelte";
    import Logout from "./Logout.svelte";
    import Theme from "./Theme.svelte";
</script>

<div class="navbar shadow-lg bg-base-100 fixed top-0 z-10">
    <div class="navbar-start">
        {#if $page.data.auth}
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        ><path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16"
                        /></svg
                    >
                </label>
                <ul
                    tabindex="0"
                    class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                    <Items />
                </ul>
            </div>
        {/if}
        <a class="btn btn-ghost normal-case text-xl text-primary">
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
                    d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                />
            </svg>
            Notice Board
        </a>
    </div>
    {#if $page.data.auth}
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
                <Items />
            </ul>
        </div>
    {/if}
    <div class="navbar-end">
        <!-- <Theme /> -->
        {#if $page.data.auth}
            <Logout />
        {:else}
            <a href="/auth/login" class="btn">sign in</a>
        {/if}
    </div>
</div>
