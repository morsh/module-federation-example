import { Builder } from 'builder-pattern';
import { chance } from './chance';
import { Data } from '../src/services/SomeService/SomeService';

export const aData = () =>
  Builder<Data>()
    .id(chance.integer({ min: 1, max: 1000 }))
    .title(chance.string())
    .build();

export const someData = () => chance.n(aData, chance.integer({ min: 1, max: 10 }));
