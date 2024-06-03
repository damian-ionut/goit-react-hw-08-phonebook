import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      addContact({
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <div className={css.inputWrapper}>
        <input className={css.formInput} type="text" name="name" placeholder=" " />
        <label className={css.formLabel}>Name</label>
      </div>
      <div className={css.inputWrapper}>
        <input className={css.formInput} type="tel" name="number" placeholder=" " />
        <label className={css.formLabel}>Number</label>
      </div>
      <button className={css.addContactBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};
