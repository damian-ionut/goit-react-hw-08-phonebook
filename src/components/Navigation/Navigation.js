import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.navigationContainer}>
      <NavLink className={css.logo} to="/" activeClassName={css.activeLink}>
        <span className={css.phone}>Phone</span>
        <span className={css.book}>Book</span>
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={`${css.link} ${css.contacts}`} 
          to="/contacts"
          activeClassName={css.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
