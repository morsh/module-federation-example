
export type Data = {
  id: number;
  title: string;
}

export interface SomeService {
  getData: () => Promise<Data[]>;
}

export function createSomeService(): SomeService {

  const getData = async (): Promise<Data[]> => {
    return Promise.resolve([
      { id: 1, title: 'title 1' },
      { id: 2, title: 'title 2' },
    ]);
  };

  return { getData };
}
