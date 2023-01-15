import { chance } from '../tests/chance';
import { getLocaleFromUrlParams } from './getLocaleFromUrlParams';

describe('getLocaleFromUrlParams', () => {
  it('should return "en" string', () => {
    expect(getLocaleFromUrlParams('')).toBe('en');
  });

  it('should return locale from url string', () => {
    const locale = chance.locale();
    expect(getLocaleFromUrlParams('?locale=' + locale)).toEqual(locale);
  });
});
