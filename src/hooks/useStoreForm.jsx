
import {  useRef, useEffect } from 'react';
import {  useForm } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';



const schema = yup.object()
.shape({
    email: yup.string()
        .matches(/^[A-Za-z0-9]+@evrostroy1.ru$/, 'Допускается только корпоративная почта')
        .required('Поле обязательно для заполнения'),
    name: yup.string()
        .matches(/^[А-Яа-яЁёs]+$/, 'Допускается только кириллица')
        .required('Поле обязательно для заполнения'),
    login: yup.string()
        .required('Поле обязательно для заполнения'),
    password: yup.string()
        .required('Поле обязательно для заполнения'),
    repeatPassword:yup.string()
        .matches(/^[\w_]*$/, 'Допускаются буквы, цифры или нижнее подчеркивание')
        .max(15, 'Не более 15 символов')
        .min(3, 'Не менее 3 символов' )
        .oneOf([yup.ref('password'), null], 'Пароли должны совпадать')
        .required('Поле обязательно для заполнения'),

});

 export const useStore = () => {
    const submitButtonRef = useRef(null);

    const {
        register,
        handleSubmit,
        formState: {errors, isValid},
      } = useForm({
        mode: 'onChange',
        defaultValues: {
        email: '',
        name: '',
        login: '',
        password: '',
        repeatPassword: '',
        },
        resolver: yupResolver(schema)
      });
      
      
      
      const onSubmit = (data) => {
       
        console.log(data);
    };


    const onError = (errors) => {
          console.log(errors);  
        }
        useEffect(() => {
            if (isValid && submitButtonRef.current) {
                submitButtonRef.current.focus();
              }
            }, [isValid]);  
    
 
  return{
    register,
        handleSubmit: handleSubmit(onSubmit, onError),
        errors,
        submitButtonRef,
    
  }
}
    
  



