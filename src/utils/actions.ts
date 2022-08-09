import { RESET, DECREMENT, INCREMENT, ICounterActions } from './types';

export const incrementReducer = (): ICounterActions => ({ type: INCREMENT });
export const decrementReducer = (): ICounterActions => ({ type: DECREMENT });
export const resetReducer = (): ICounterActions => ({ type: RESET });
