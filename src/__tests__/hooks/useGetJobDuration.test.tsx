import { renderHook } from '@testing-library/react';
import { useGetJobDuration } from '../../hooks';

describe('useGetJobDuration hook', () => {
    it('should initialize the useGetJobDuration hook correctly', async () => {
        const { result } = renderHook(() => useGetJobDuration(), {
            wrapper: ({ children }) => <div>{children}</div>,
        });

        expect(result.current).toBeDefined();
    });
});
