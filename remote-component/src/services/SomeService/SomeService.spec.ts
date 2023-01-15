import { createSomeService, SomeService } from './SomeService';

describe('SomeService', () => {
  let someService: SomeService;

  beforeEach(() => {
    someService = createSomeService();
  });

  describe('getData', () => {
    it('should return data', async () => {
      const result = await someService.getData();
      expect(result).toEqual([
        { id: 1, title: 'title 1' },
        { id: 2, title: 'title 2' },
      ]);
    });
  });
});
