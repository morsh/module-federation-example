import { configureStore } from '@reduxjs/toolkit';
import { createServices, Services } from '../../services';
import { reducer } from '../reducers';

interface CreateStoreParams {
  locale: string;
  isMock?: boolean;
  services?: Services;
}

export const createStore = ({ locale, isMock, services }: CreateStoreParams) =>
  configureStore({
    reducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false, // To repress non-serializable warnings on dates
        thunk: {
          extraArgument: services || createServices(),
        },
      }),
    preloadedState: {
      locale,
      isMock,
    },
  });

export type AppStore = ReturnType<typeof createStore>;
export type GetState = AppStore['getState'];
export type AppDispatch = AppStore['dispatch'];

export type RootState = ReturnType<GetState>;
export type ActionFn<T = void> = (dispatch: AppDispatch, getState: GetState, services: Services) => Promise<T> | T;
