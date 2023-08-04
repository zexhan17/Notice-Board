<script>
    import { page } from "$app/stores";
    import { fade } from "svelte/transition";

    const user = $page.data.user;
    let step = 1;
</script>

<div class="grid place-content-center mt-5">
    <div class="w-72 sm:w-96 md:w-[30rem]">
        {#if user.role == "student"}
            <img
                class="h-42 mb-5"
                src={`http://127.0.0.1:8090/api/files/_pb_users_auth_/${user.id}/${user.avatar}`}
                alt="clg card"
            />
        {/if}
        <div
            class="bg-base-300 flex justify-between items-center py-2 px-3 rounded-t-lg"
        >
            <span>name</span>
            <span>{user.name}</span>
        </div>
        <div class="bg-base-200 flex justify-between items-center py-2 px-3">
            <span>email</span>
            <span>{user.email}</span>
        </div>
        <div
            class:rounded-b-lg={user.role == "teacher"}
            class="bg-base-300 flex justify-between items-center py-2 px-3"
        >
            <span>department</span>
            <span>{user.dept}</span>
        </div>
        {#if user.role == "student"}
            <div
                class="bg-base-200 flex justify-between items-center py-2 px-3"
            >
                <span>roll no</span>
                <span>{$page.data.user.rollNo}</span>
            </div>
            <div
                class="bg-base-300 flex justify-between items-center py-2 px-3 rounded-b-lg"
            >
                <span>session</span>
                <span>{$page.data.user.session}</span>
            </div>
        {/if}

        <h1 class="mt-10 text-xl">Change Password</h1>
        <div class="grid place-content-center pt-10">
            {#if step == 1}
                <button on:click={() => (step = 2)} class="btn"
                    >send code</button
                >
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
    </div>
</div>
