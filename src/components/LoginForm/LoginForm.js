import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn(formData));
    setFormData({ email: '', password: '' });
  };

  return (
    <div className={css.container}>
      <h1 className={css.loginTitle}>Log In</h1>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <div className={css.inputWrapper}>
          <input
            className={css.formInput}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <div className={css.inputWrapper}>
          <input
            className={css.formInput}
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </div>
        <button className={css.logInBtn} type="submit">
          Log In
        </button>
      </form>
    </div>
  );
};
