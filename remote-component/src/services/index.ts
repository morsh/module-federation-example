import { createSomeService, SomeService } from './SomeService/SomeService';

export interface Services {
  someService: SomeService;
}

export const createServices = (): Services => ({
  someService: createSomeService(),
});
