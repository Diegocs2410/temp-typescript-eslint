import {
  decrementReducer,
  incrementReducer,
  resetReducer,
} from 'utils/actions';
import { INCREMENT, DECREMENT, RESET } from 'utils/types';

describe('Should test actions', () => {
  test('Should call Increment action', () => {
    const action = incrementReducer();
    expect(action).toEqual({ type: INCREMENT });
  });
  test('Should call Decrement action', () => {
    const action = decrementReducer();
    expect(action).toEqual({ type: DECREMENT });
    expect(action).toBeTruthy();
    expect(action).toMatchObject({ type: DECREMENT });
  });
  test('Should call Reset action', () => {
    const action = resetReducer();
    expect(action).toEqual({ type: RESET });
  });
});
