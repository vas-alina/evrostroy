import { useState } from 'react';


const initialState = {
    email: '',
    login: '',
    password: '',
    name: '',
}


 const useStore = () => {
    const [formState, setFormState] = useState(initialState);
    const [formValidity, setFormValidity] = useState({
      email: true,
      login: true,
      password: true,
      name: true,
    });
  
    const validators = {
      email: (value) => /^[A-Za-z0-9]+@evrostroy1.ru$/i.test(value),
      login: (value) => value.length <= 12,
      password: (value) => /^[a-zA-Z0-9]+$/.test(value),
      name: (value) => /^[А-Яа-яЁёs]+$/.test(value),
    };
  
    const updateState = (fieldName, newValue) => {
      setFormState((prevState) => ({ ...prevState, [fieldName]: newValue }));
      const isValid = validators[fieldName](newValue);
      setFormValidity((prevState) => ({ ...prevState, [fieldName]: isValid }));
    };
  
    return {
      formState,
      formValidity,
      updateState,
    };
  };

  export default useStore;