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

export interface IBoxApps {
  to: string;
  text: string;
}

export interface IHeader {
  title: string;
  size?: '5xl' | '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  classes?: string;
}
