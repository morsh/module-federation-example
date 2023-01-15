import { createMockStore } from '../store/mockStore';
import { doSomeAction } from './someAction';
import { someData } from '../../../tests/builder';

describe('doSomeAction', () => {

  it('should not call service when isMock', async () => {
    const { store, services } = createMockStore({ preloadedState: { isMock: true } });
    await store.dispatch(doSomeAction());

    expect(services.someService.getData).not.toHaveBeenCalled();
  });

  it('should call service', async () => {
    const { store, services } = createMockStore({ preloadedState: { isMock: false } });
    const data = someData();
    services.someService.getData.mockResolvedValue(data);    
    const result = await store.dispatch(doSomeAction());

    expect(services.someService.getData).toHaveBeenCalled();
    expect(result).toEqual(data);
  });
});
