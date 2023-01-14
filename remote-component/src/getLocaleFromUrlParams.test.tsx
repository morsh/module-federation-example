import { getLocaleFromUrlParams } from './getLocaleFromUrlParams';
import { chance } from '../tests/chance';

describe('getLocaleFromUrlParams', () => {
  it('should return "en" string', () => {
    expect(getLocaleFromUrlParams('')).toEqual('en');
  });

  it('should return locale from url string', () => {
    const locale = chance.locale();
    expect(getLocaleFromUrlParams('?locale=' + locale)).toEqual(locale);
  });
});
