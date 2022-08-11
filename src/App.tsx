import { ReactComponent as Logo } from 'assets/favicon.svg';
import { Outlet } from 'react-router-dom';
import Nav from 'components/Nav';

function App() {
  return (
    <div className="container mx-auto p-10">
      <Nav />
      <div className="grid place-content-center mt-10">
        <Logo height={100} width={100} />
      </div>
      <Outlet />
    </div>
  );
}

export default App;
