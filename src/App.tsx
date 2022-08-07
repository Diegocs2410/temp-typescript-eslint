import { Header } from 'components/Header';
import { ReactComponent as Logo } from 'assets/favicon.svg';
import { Button } from 'components/Button';

function App() {
  return (
    <div className="container mx-auto p-10">
      <Header title="Scalable App" />
      <div className="grid place-content-center mt-10">
        <Logo height={100} width={100} />
      </div>
      <Button onClick={() => alert('hello')}>Hello</Button>
    </div>
  );
}

export default App;
