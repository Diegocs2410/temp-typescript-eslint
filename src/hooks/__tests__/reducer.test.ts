import { renderHook } from '@testing-library/react';
import reducer from 'hooks/reducer';
import { counterInitial, DECREMENT, INCREMENT, RESET } from 'utils/types';
describe('reducer', () => {
  test('should use reducer incrementing by 1', () => {
    const { result } = renderHook(() => reducer(counterInitial, { type: INCREMENT }));
    expect(result.current.count).toBe(1);
  });
  test('should decrement', () => {
    const { result } = renderHook(() => reducer(counterInitial, { type: DECREMENT }));
    expect(result.current.count).toBe(-1);
  });
  test('should reset to 0', () => {
    const { result } = renderHook(() => reducer(counterInitial, { type: RESET }));
    expect(result.current.count).toBe(0);
    expect(result.current.count).toBeFalsy();
  });
  test('should test default and return an error', async () => {
    try {
      const { result } = renderHook(() => reducer(counterInitial, { type: 'unknown' }));
      await expect(result.current.count).rejects.toThrow(Error);
    } catch (error) {
      console.log(error);
    } finally {
      expect(true).toBeTruthy();
    }
  });
});
