import { simpleSlice } from './simpleSlice';

const locale = simpleSlice('locale', 'en-us');
export const isMock = simpleSlice<boolean | undefined>('isMock', false);

export const reducer = {
  locale: locale.reducer,
  isMock: isMock.reducer,
};
