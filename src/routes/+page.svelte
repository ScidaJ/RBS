<script lang="ts">
    import { Button, Footer, FooterCopyright, Heading, Helper, Img, Label, Textarea, P, Input } from 'flowbite-svelte';
    import RBS from "$lib/assets/rbs.avif"
    import Bill from "$lib/assets/bill.avif"

    let name = "";
    let nameValid = true;
    let email = "";
    let emailValid = true;
    let message = "";
    let messageValid = true;
    let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);


    function validateName() {
        if (name.length === 0) {
            nameValid = false;
        } else {
            nameValid = true;
        }
    }

    function validateEmail() {
        emailValid = regexp.test(email)
    }

    function validateMessage() {
        if (message.length === 0) {
            messageValid = false;
        } else {
            messageValid = true;
        }
    }
</script>

<div class="start-0 h-[18vh] lg:h-[40vh] lg:w-full bg-no-repeat bg-fixed bg-contain bg-black/30 flex items-center" 
style="background-image: linear-gradient(rgba(0, 0, 0, 0.6) ,rgba(0, 0, 0, 0.3)), url({RBS});">
    <Heading tag="h1" class="mb-4 text-center text-white" customSize="text-4xl  md:text-5xl lg:text-6xl">Registered Branch Services LLC</Heading>
</div>

<div class="flex">
    <Heading tag="h2" class="text-3xl lg:mt-4 font-extrabold text-center text-[#273141]">What do we do?</Heading>
</div>

<div class="flex">
    <div class="w-full lg:w-2/3">
        <P class="ml-2 mr-1 mt-1 lg:mt-5 lg:mb-5 lg:ml-4 lg:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Phasellus lobortis mauris vitae arcu iaculis sagittis. 
            Maecenas a libero quis ex volutpat sollicitudin vitae vitae odio. 
            Praesent tincidunt quam eget mi iaculis maximus. Vivamus felis erat, iaculis id egestas a, tempor et mauris. 
            Sed at ipsum sit amet nulla dapibus malesuada.
        </P>
    </div>
    <div class="hidden lg:flex lg:w-1/3 lg:p-4 lg:justify-center lg:items-center">
        <Img src="{Bill}" alt="A headshot" class="size-40"/>
    </div>
</div>

<div class="flex flex-col justify-center text-center mt-4 md:mt-0">
    <Heading tag="h3" customSize="text-2xl font-extrabold" class="text-[#273141]">Want to get in touch?</Heading>
    <P class="mb-6 text-lg sm:px-16 xl:px-48 dark:text-gray-400 text-center">Fill out the form below with all of your details and we'll reach out to you as soon as possible.</P>
</div>

<div class="flex justify-center mb-4">
    <form class="w-full md:w-1/2 m-2" method="POST" id="contact_form">
        <div>
            <Label for="name" class="ml-2 mt-1 mb-1 ">Name</Label>
            <Input type="text" name="name" id="name" class="invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500" bind:value={name} placeholder="John Smith" required on:blur={validateName} />
            {#if !nameValid}
                <Helper class="mt-2" color="red">
                    <span class="font-medium">May I have your name?</span>
                </Helper>
            {/if}
        </div>
        <div>
            <Label for="email" class="ml-2 mt-1 mb-1">Email</Label>
            <Input type="email" name="email" id="email" class="invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500" bind:value={email} placeholder="john.smith@company.tld123-456-7890" required on:blur={validateEmail} />
            {#if !emailValid}
                <Helper class="mt-2" color="red">
                    <span class="font-medium">Please enter a valid email address.</span>
                </Helper>
            {/if}
        </div>
        <div>
            <Label for="number" class="ml-2 mt-1 mb-1">Business Phone Number</Label>
            <Input type="tel" name="number" id="number" placeholder="123-456-7890" />
        </div>
        <div>
            <Label for="message" class="ml-2 mt-1 mb-1">Message</Label>
            <Textarea id="message" name="message" class="invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500" bind:value={message} placeholder="Your message" rows="3" required on:blur={validateMessage} />
            {#if !messageValid}
            <Helper class="mt-2" color="red">
                <span class="font-medium">Brevity is the soul of wit, but we need a message to send along with your name.</span>
            </Helper>
            {/if}
        </div>
        <div>
            <Button class="mt-2" type="submit">Submit</Button>
        </div>
    </form>
</div>

<Footer>
    <div class=" intsert-x-0 bottom-0 start-0 w-full p-4 bg-white border-t border-grey-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <FooterCopyright href="/" by="Registered Branch Services LLC" year={2024}/>
    </div>
</Footer>
