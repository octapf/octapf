import { paths } from '../../constants';

describe('Paths', () => {
    it('returns the correct path selected', () => {
        expect(paths.CV).toBe('/cv');
        expect(paths.HOME).toBe('/');
    });
});
