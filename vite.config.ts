import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { nodeModulesPolyfillPlugin } from 'esbuild-plugins-node-modules-polyfill';

export default defineConfig({
	plugins: [sveltekit()],
	optimizeDeps: {
		esbuildOptions: {
			plugins: [
				nodeModulesPolyfillPlugin(),
				NodeGlobalsPolyfillPlugin({
					process: true,
					buffer: true
				})
			],
			define: {
				global: 'globalThis'
			}
		}
	}
});
