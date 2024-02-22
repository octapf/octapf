import { newId } from '../../utils';

describe('newId', () => {
    let id = '0';
    it('returns a string with first char uppercase', () => {
        id = newId();
        expect(id).toBe('generated1');
    });
});
