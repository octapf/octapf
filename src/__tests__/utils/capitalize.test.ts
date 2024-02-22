import { capitalize } from '../../utils';

describe('Capitilize', () => {
    it('returns a string with first char uppercase', () => {
        const testString = 'testing';
        expect(capitalize(testString)).toBe('Testing');
    });
});
