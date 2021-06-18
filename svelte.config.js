import preprocess from 'svelte-preprocess';
import hooks from '@midwayjs/vite-plugin-hooks';
import adapter from '@sveltejs/adapter-node';
import { defineConfig } from 'vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: defineConfig({
			plugins: [ hooks.default() ]
		})
	}
};

export default config;
