import { SomeService } from './SomeService';

export const createSomeServiceTestkit = (): jest.MockedObjectDeep<SomeService> => ({
  getData: jest.fn(),
});
