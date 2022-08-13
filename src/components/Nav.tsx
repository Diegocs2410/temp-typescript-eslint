import { NavLink } from 'react-router-dom';
import { verifiedActiveClassName } from 'utils';
import { ReactComponent as Logo } from 'assets/favicon.svg';

const Nav = () => {
  return (
    <nav className="flex gap-7 text-yellow-50 font-semibold items-center">
      <div className="grid place-content-center">
        <NavLink to="/">
          <Logo height={30} width={30} />
        </NavLink>
      </div>
      <NavLink to="/" className={({ isActive }) => verifiedActiveClassName(isActive)}>
        Home
      </NavLink>
      <NavLink to="/counter" className={({ isActive }) => verifiedActiveClassName(isActive)}>
        Counter
      </NavLink>
      <NavLink to="/notes" className={({ isActive }) => verifiedActiveClassName(isActive)}>
        notes
      </NavLink>
    </nav>
  );
};

export default Nav;
