import { Header } from 'components/Header';
import { ReactComponent as Logo } from 'assets/favicon.svg';
import Counter from 'components/Counter';

function App() {
  return (
    <div className="container mx-auto p-10">
      <Header title="Scalable App" />
      <div className="grid place-content-center mt-10">
        <Logo height={100} width={100} />
      </div>

      <Counter />
    </div>
  );
}

export default App;
