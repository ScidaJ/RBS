<script lang="ts">
	import {
		Button,
		Footer,
		FooterCopyright,
		Heading,
		Helper,
		Img,
		Label,
		Textarea,
		P,
		Input,
		Toast
	} from 'flowbite-svelte';
	import { enhance, applyAction } from '$app/forms';
	import RBS from '$lib/assets/rbs.avif';
	import Bill from '$lib/assets/bill.avif';

	let name = '';
	let nameValid = true;
	let email = '';
	let emailValid = true;
	let message = '';
	let messageValid = true;
	let emailSent = false;
	let toastStatus = false;
	let regexp = new RegExp(
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	);

	function validateName() {
		if (name.length === 0) {
			nameValid = false;
		} else {
			nameValid = true;
		}
	}

	function validateEmail() {
		emailValid = regexp.test(email);
	}

	function validateMessage() {
		if (message.length === 0) {
			messageValid = false;
		} else {
			messageValid = true;
		}
	}
</script>

<div
	class="start-0 flex h-[15vh] items-center bg-black/30 bg-contain bg-fixed bg-no-repeat lg:h-[30vh]"
	style="background-image: linear-gradient(rgba(0, 0, 0, 0.6) ,rgba(0, 0, 0, 0.3)), url({RBS});"
>
	<Heading
		tag="h1"
		class="mb-4 text-center text-white"
		customSize="text-3xl  md:text-5xl lg:text-6xl">Registered Branch Services LLC</Heading
	>
</div>

<div class="flex">
	<Heading tag="h2" class="text-center text-3xl font-extrabold text-[#273141] lg:mt-4"
		>What do we do?</Heading
	>
</div>

<div class="flex">
	<div class="w-full lg:w-2/3">
		<P class="ml-2 mr-1 mt-1 text-center lg:mb-5 lg:ml-5 lg:mt-5 lg:text-2xl">
			Registered Branch Services specializes in providing comprehensive compliance solutions for
			FINRA-registered branches. We conduct thorough branch inspections to ensure adherence to
			regulatory standards, perform diligent email surveillance to safeguard against potential
			breaches and maintain compliance, and utilize customized Written Supervisory Procedures (WSP)
			checklists to help firms remain aligned with both internal policies and external regulations.
			Our goal is to support financial institutions in maintaining regulatory excellence and
			protecting their business operations.
		</P>
	</div>
	<div class="hidden lg:flex lg:w-1/3 lg:items-center lg:justify-center lg:p-4">
		<Img src={Bill} alt="A headshot" class="size-40" />
	</div>
</div>

<div class="mt-4 flex flex-col justify-center text-center md:mt-0">
	<Heading tag="h3" customSize="text-2xl font-extrabold" class="text-[#273141]"
		>Want to get in touch?</Heading
	>
	<P class="mb-6 text-center text-lg sm:px-16 xl:px-48 dark:text-gray-400"
		>Fill out the form below with all of your details and we'll reach out to you as soon as
		possible.</P
	>
</div>

<div class="mb-4 flex justify-center">
	<form
		class="m-2 w-full md:w-1/2"
		method="POST"
		id="contact_form"
		use:enhance={() => {
			return async ({ result }) => {
				applyAction(result);
				if (result.type === 'success') {
					emailSent = true;
				}
				toastStatus = true;
				setTimeout(() => {
					toastStatus = false;
					emailSent = false;
				}, 3000);
			};
		}}
	>
		<div>
			<Label for="name" class="mb-1 ml-2 mt-1 ">Name</Label>
			{#if !nameValid}
				<Helper class="mb-2 ml-2" color="red">
					<span class="font-medium">May I have your name?</span>
				</Helper>
			{/if}
			<Input
				type="text"
				name="name"
				id="name"
				class="invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
				bind:value={name}
				placeholder="John Smith"
				required
				on:blur={validateName}
			/>
		</div>
		<div>
			<Label for="email" class="mb-1 ml-2 mt-1">Email</Label>
			{#if !emailValid}
				<Helper class="mb-2 ml-2" color="red">
					<span class="font-medium">Please enter a valid email address.</span>
				</Helper>
			{/if}
			<Input
				type="email"
				name="email"
				id="email"
				class="invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
				bind:value={email}
				placeholder="john.smith@company.tld"
				required
				on:blur={validateEmail}
			/>
		</div>
		<div>
			<Label for="number" class="mb-1 ml-2 mt-1">Business Phone Number</Label>
			<Input type="tel" name="number" id="number" placeholder="123-456-7890" />
		</div>
		<div>
			<Label for="message" class="mb-1 ml-2 mt-1">Message</Label>
			{#if !messageValid}
				<Helper class="mb-2 ml-2" color="red">
					<span class="font-medium"
						>Brevity is the soul of wit, but we'd like to know why you're calling.</span
					>
				</Helper>
			{/if}
			<Textarea
				id="message"
				name="message"
				class="invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
				bind:value={message}
				placeholder="Your message"
				rows="3"
				required
				on:blur={validateMessage}
			/>
		</div>
		<div>
			<Button class="mt-2" type="submit">Submit</Button>
		</div>
	</form>
</div>

<div class="relative">
	{#if emailSent}
		<Toast
			dismissable={false}
			bind:toastStatus
			position="bottom-left"
			class="w-30 justify-center rounded bg-green-700"
		>
			<P class="text-white">Message Sent</P>
		</Toast>
	{:else if !emailSent}
		<Toast
			dismissable={false}
			bind:toastStatus
			position="bottom-left"
			class="w-30 rounded bg-red-700"
		>
			<P class="text-white">Message Failed</P>
		</Toast>
	{/if}
</div>

<Footer>
	<div
		class=" intsert-x-0 border-grey-200 bottom-0 start-0 w-full border-t bg-white p-4 shadow md:flex md:items-center md:justify-between md:p-6 dark:border-gray-600 dark:bg-gray-800"
	>
		<FooterCopyright href="/" by="Registered Branch Services LLC" year={2024} />
	</div>
</Footer>
