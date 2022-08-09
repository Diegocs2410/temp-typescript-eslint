import { DECREMENT, ICounterActions, INCREMENT, RESET } from 'utils/types';

const initialState = { count: 0 };

export default function reducer(state: typeof initialState, action: ICounterActions) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    case RESET:
      return { count: 0 };
    default:
      throw new Error();
  }
}
