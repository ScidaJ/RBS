import { fail, json } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions: import('./$types').Actions = {
	default: async (event: any) => {
		const data = await event.request.formData();
		fetch('http://localhost:8080', {
			method: 'POST',
			body: data
		}).then((response) => {
			if (response.status !== 200) {
				return fail(400);
			} else {
				return { success: true };
			}
		});
	}
};
