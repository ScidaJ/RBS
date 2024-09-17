<script lang="ts">
    import { Button, Heading, Label, Textarea, Tooltip, P, A, Input } from 'flowbite-svelte';
    import RBS from "$lib/assets/rbs.avif"
</script>

<div class="start-0 w-full h-[40vh] bg-fixed bg-cover bg-black/30 flex items-center justify-center" style="background-image: linear-gradient(rgba(0, 0, 0, 0.6) ,rgba(0, 0, 0, 0.3)), url({RBS});">
    <Heading tag="h1" class="mb-4 text-center text-white" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl">Registered Branch Services LLC</Heading>
</div>

<P>Here at Registered Branch Services etc., etc...</P>

<form>
    <div>
        <Label for="name" class="mb-2">Name</Label>
        <Input type="text" id="name" placeholder="John Smith" required />
    </div>
    <div>
        <Label for="email" class="mb-2">Email</Label>
        <Input type="email" id="email" placeholder="john.smith@company.tld" required />
    </div>
    <div>
        <Label for="message" class="mb-2">Message</Label>
        <Textarea id="message" placeholder="Your message" rows="4" name="message" />
    </div>
</form>


