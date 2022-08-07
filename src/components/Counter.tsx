import { Button } from './Button';

const Counter = () => {
  return (
    <section className="grid place-content-center">
      <p className="p-5 text-white text-center text-4xl font-bold ">0</p>
      <div className="flex gap-5">
        <Button onClick={() => alert('hi')}>-</Button>
        <Button onClick={() => alert('hi')}>Reset</Button>
        <Button onClick={() => alert('hi')}>+</Button>
      </div>
    </section>
  );
};

export default Counter;
