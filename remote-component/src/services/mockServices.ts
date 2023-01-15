import { Services } from '.';
import { createSomeServiceTestkit } from './SomeService/SomeService.testkit';

export type MockedServices = jest.MockedObjectDeep<Services>;

export const createMockServices = (services: any = {}) => ({
  someService: createSomeServiceTestkit(),
  ...services,
});
