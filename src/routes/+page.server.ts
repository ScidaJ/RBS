import { json } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions: import('./$types').Actions = {
    default: async (event : any) => {
        const data = await event.request.formData();
        fetch('http://mail.scida.dev/', {
            method: 'POST',
            body: data
        }).then((response) => {
            console.log(response)
        });
    }
}
