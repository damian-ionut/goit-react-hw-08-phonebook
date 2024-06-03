import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import { setFilter } from '../../redux/filter/filterSlice';
import { selectStatusFilter } from '../../redux/selectors';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={css.filterContainer}>
      <label className={css.label}>
        <input
          className={css.contactInput}
          type="text"
          value={filter}
          onChange={onChange}
          placeholder="Find contacts by name"
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};
