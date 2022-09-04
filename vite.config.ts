import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import globals from 'rollup-plugin-node-globals';
import nodePolyfill from 'rollup-plugin-polyfill-node';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const config: UserConfig = {
	plugins: [sveltekit(), globals(), nodePolyfill({
		include: ['events', 'util', 'process']
	}), nodeResolve({
		preferBuiltins: false
	})]
};

export default config;
