/* eslint-disable no-console */
import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => {
	cleanup()
})
// Clean up after the tests are finished.
