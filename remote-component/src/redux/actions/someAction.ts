import { Data } from '../../services/SomeService/SomeService';
import { getIsMock } from '../selectors';
import { ActionFn } from '../store/configureStore';

export const doSomeAction = (): ActionFn<Data[]> => (dispatch, getState, { someService }) => {
    const isMock = getIsMock(getState());
    if (isMock) {
      return Promise.resolve([]);
    }
    return someService.getData();
  };
