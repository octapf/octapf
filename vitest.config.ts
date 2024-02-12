/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/__tests__/setup.ts',
		coverage: {
			provider: 'v8',
			reporter: ['lcov', 'text'],
		},
	},
})
