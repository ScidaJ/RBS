<script>
    import "../app.css";
    import { Footer, FooterBrand, FooterCopyright } from 'flowbite-svelte';
</script>

<Footer>
    <div class="absolute bottom-0 start-0 z-20 w-full p-4 bg-wwhite border-t border-grey-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <FooterCopyright href="/" by="Registered Branch Services LLC" year={2024}/>
    </div>
</Footer>

<slot></slot>
