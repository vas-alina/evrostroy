
import { RegistrationLayout } from "./RegistrationLayout";
import useStore from '../hooks/useStoreRegistrationPageForm';

const sendFormData = (formData) => {
    console.log(formData);
};



export const RegistrationContainer = () => {
    const { formState, updateState, formValidity } = useStore(); 
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const { email, login, name, password } = formState;
        const { 
            email: isEmailValid, 
            login: isLoginValid, 
            name: isNameValid, 
            password: isPasswordValid
         } = formValidity;
        console.log({ isEmailValid, isLoginValid, isNameValid, isPasswordValid });
        if (isEmailValid && isLoginValid && isPasswordValid && isNameValid) {
            const formData = {
                email,
                name,
                login,
                password,
            };
            const formDataJson = JSON.stringify(formData);
            console.log(formDataJson);
            
            sendFormData(formData);
        } else {
            console.error('Ошибка!');
        }
    };
     
    return(
       <>
       <RegistrationLayout 
            formState={formState}
            updateState={updateState}
            handleSubmit={handleSubmit}
            isEmailValid={formValidity.email}
            isPasswordValid={formValidity.password}
            isLoginValid={formValidity.login}
            isNameValid={formValidity.name}
        />
       </>
    )
}

export default RegistrationContainer