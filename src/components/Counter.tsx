import useCounter from 'hooks/use-counter';
import reducer from 'hooks/reducer';
import { Button } from './Button';
import { counterInitial } from '../utils/types';
import { useReducer } from 'react';
import {
  incrementReducer,
  resetReducer,
  decrementReducer,
} from 'utils/actions';

import { Header } from './Header';

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter();

  const [state, dispatch] = useReducer(reducer, counterInitial);

  return (
    <>
      <Header title="Custom Hook" size="5xl" classes="mt-5" />
      <section className="grid place-content-center py-10">
        <p className="p-5 text-white text-center text-4xl font-bold ">
          {count}
        </p>

        <div className="flex gap-5">
          <Button onClick={decrement}>-</Button>
          <Button onClick={reset}>Reset</Button>
          <Button onClick={increment}>+</Button>
        </div>
      </section>
      <hr />

      <Header title="With redux" size="5xl" classes="mt-10" />
      <section className="grid place-content-center">
        <p className="p-5 text-white text-center text-4xl font-bold ">
          {state.count}
        </p>
        <div className="flex gap-5">
          <Button onClick={() => dispatch(decrementReducer())}>-</Button>
          <Button onClick={() => dispatch(resetReducer())}>Reset</Button>
          <Button onClick={() => dispatch(incrementReducer())}>+</Button>
        </div>
      </section>
    </>
  );
};

export default Counter;
