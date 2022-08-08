import useCounter from 'hooks/use-counter';
import { Button } from './Button';

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter();
  console.log(count);
  return (
    <section className="grid place-content-center">
      <p className="p-5 text-white text-center text-4xl font-bold ">{count}</p>
      <div className="flex gap-5">
        <Button onClick={decrement}>-</Button>
        <Button onClick={reset}>Reset</Button>
        <Button onClick={increment}>+</Button>
      </div>
    </section>
  );
};

export default Counter;
