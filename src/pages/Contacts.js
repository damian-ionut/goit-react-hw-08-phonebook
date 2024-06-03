import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    const container = document.getElementById('contacts-container');

    if (container) {
      container.style.display = 'flex';
      container.style.flexDirection = 'column';
      container.style.alignItems = 'center';
      container.style.backgroundColor = '#fff';
      container.style.borderRadius = '10px';
      container.style.padding = '20px';
      container.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
      container.style.margin = '20px auto';
      container.style.width = '25%'; 
    }
  }, []);

  return (
    <div id="contacts-container">
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Contacts</h2>
      <ContactForm />
      <Filter />
      {isLoading && !error && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ContactList />
    </div>
  );
}
