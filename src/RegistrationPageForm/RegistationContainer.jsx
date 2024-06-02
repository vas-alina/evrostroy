import { useState } from "react"
import { RegistrationLayout } from "./RegistrationLayout"

const initialState = {
    email: '',
    login: '',
    password: '',
    name: '',
}



export const RegistrationContainer = () => {
    const [formState, setFormState] = useState(initialState);  
    const [userEmail, setUserEmail] = useState(true)
    const [userLogin, setUserLogin] = useState(true)
    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState(true)
    
    const handleSubmit = (event) => {
        event.preventDefault();
    if (userEmail && userLogin && userPassword && userName) {
        const formData = {
            email: formState.email,
            name: formState.name,
            login: formState.login,
            password: formState.password,
            
        };
        const formDataJson = JSON.stringify(formData);

        console.log(formDataJson);
        
    } else {
        console.error('Ошибка во входных данных!');
    }
    };
    const validSymbolPassword = /^[a-zA-Z0-9]+$/;

    
    
    const validatePassword= (password) => {
        setUserPassword(validSymbolPassword.test(password))
    }
    const validateLogin = (login) => {
        setUserLogin(login.length <= 12);
    };

    const validateEmail = (email) => {
        const emailRegex =  /^[A-Za-z0-9]+@evrostroy1\.ru$/i;
        setUserEmail(emailRegex.test(email));
    };

    const validName = (name) => {
        const nameRegex = /^[А-Яа-яЁёs]+$/;
        setUserName(nameRegex.test(name))

    }

    const updateState = (fieldName, value) => {
        setFormState(prevState => ({ ...prevState, [fieldName]: value }));

        if (fieldName === 'email') {
            validateEmail(value);
        } else if (fieldName === 'password') {
            validatePassword(value);
        } else if (fieldName === 'login') {
            validateLogin(value);
        } else if (fieldName === 'name') {
            validName(value)
        }
    };

return(
   <>
   <RegistrationLayout 
        formState={formState}
        updateState={updateState}
        handleSubmit={handleSubmit}
        isEmailValid={userEmail}
        isPasswordValid={userPassword}
        isLoginValid={userLogin}
        isNameValid={userName}
        />
   </>
        
    )
}
