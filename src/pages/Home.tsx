import { Header } from 'components/Header';
import BoxApp from '../components/BoxApp';
const Home = () => {
  return (
    <div className="container mx-auto p-10">
      <Header title="Welcome to scalable App" size="5xl" />
      <span className="text-2xl text-white mt-5 block text-center mx-auto">
        What app do you want?
      </span>
      <div className="flex mt-16 justify-between gap-3">
        <BoxApp to="counter" text="Counter" />
        <BoxApp to="notes" text="notes" />
      </div>
    </div>
  );
};

export default Home;
