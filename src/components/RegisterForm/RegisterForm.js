import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
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
    dispatch(register(formData));
    setFormData({ name: '', email: '', password: '' });
  };

  return (
    <div className={css.container}>
      <h1 className={css.registerTitle}>Register</h1>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <div className={css.inputWrapper}>
          <input
            className={css.formInput}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Username"
          />
        </div>
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
        <button className={css.registerBtn} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};
