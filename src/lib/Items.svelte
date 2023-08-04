<script>
    import { page } from "$app/stores";
    import { student, admin, teacher } from "./menuList";

    let renderItems = [{ title: "notifications", path: "/user/notifications" }];
    $: pathname = $page.url.pathname;
    const role = $page.data.user.role;

    if (role == "admin") {
        renderItems = [...renderItems, ...admin];
    } else if (role == "teacher") {
        renderItems = [...renderItems, ...teacher];
    } else {
        renderItems = [...renderItems, ...student];
    }
</script>

{#each renderItems as item}
    <li>
        <a
            class:active={pathname == item.path}
            href={item.path}
            class="capitalize">{item.title}</a
        >
    </li>
{/each}
