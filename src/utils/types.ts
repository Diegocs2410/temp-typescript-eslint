export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export interface ICounterActions {
  type: typeof INCREMENT | typeof DECREMENT | typeof RESET | 'unknown';
  payload?: number;
}

export const counterInitial = {
  count: 0,
};
