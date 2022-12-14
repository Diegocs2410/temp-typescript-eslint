import { Outlet } from 'react-router-dom';
import Nav from 'components/Nav';

function App() {
  return (
    <div className="container mx-auto p-10">
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
