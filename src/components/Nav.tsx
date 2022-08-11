import { NavLink } from 'react-router-dom';
import { verifiedActiveClassName } from 'utils';

const Nav = () => {
  return (
    <nav className="flex gap-7 text-yellow-50 font-semibold">
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
