<script>
    import "../app.css";
    import Navbar from "../lib/Navbar.svelte";
</script>

<Navbar />
<div class="container mx-auto pt-20 px-5 md:px-0">
    <slot />
</div>
