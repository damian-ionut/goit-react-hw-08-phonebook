import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div className={css.authNavContainer}>
      <div className={css.regContainer}>
        <NavLink className={`${css.link} ${css.registerLink}`} to="/register">
          Register
        </NavLink>
      </div>
      <div className={css.logContainer}>
        <NavLink className={`${css.link} ${css.loginLink}`} to="/login">
          Log In
        </NavLink>
      </div>
    </div>
  );
}
