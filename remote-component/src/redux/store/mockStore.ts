import { configureStore } from '@reduxjs/toolkit';
import { Services } from '../../services';
import { createMockServices, MockedServices } from '../../services/mockServices';
import { reducer } from '../reducers';
import { AppStore, RootState } from './configureStore';

export interface MockStore {
  store: AppStore;
  services: MockedServices;
}

interface Params {
  preloadedState?: Partial<RootState>;
  reducer?: any;
  services?: Partial<MockedServices | Services>;
}

export const createMockStore = ({ preloadedState, reducer: mockReducer, services }: Params): MockStore => {
  const mockServices = { ...createMockServices(), ...services };
  const store = configureStore({
    reducer: mockReducer || reducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false, // To repress non-serializable warnings on dates
        thunk: {
          extraArgument: mockServices,
        },
      }),
    preloadedState,
  });

  return { store, services: mockServices };
};
