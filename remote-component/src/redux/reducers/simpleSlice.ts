import { createSlice } from '@reduxjs/toolkit';

export const simpleSlice = <T>(name: string, initialState: T) =>
  createSlice({
    name,
    initialState,
    reducers: {
      set: (_, { payload }: { type: string; payload: T }) => payload,
      update: (state, action: { type: string; payload: Partial<T> }) => ({ ...state, ...action.payload }),
    },
  });
