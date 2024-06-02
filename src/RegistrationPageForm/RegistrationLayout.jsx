// import PropTypes from 'prop-types';
import styles from './RegistrationLayout.module.css'

export const RegistrationLayout = ({
    formState, 
    updateState, 
    handleSubmit,
    isEmailValid,
    isPasswordValid,
    isLoginValid,
    isNameValid,

    }) => 
        {

    const{ email, login, password, name } = formState;
  
    let errorMessages = '';
    errorMessages += isEmailValid ? '' : 'Допускается только корпоративная почта ';
    errorMessages += isLoginValid ? '' : 'Логин должен быть до 12 символов. ';
    errorMessages += isPasswordValid ? '' : 'Пароль должен содержать буквы и цифры. ';
    // errorMessages += isNameValid ? '' : 'Используйте кириллицу для имени. ';

    return (
        <div>
            <form onSubmit={handleSubmit} className={styles.container_form__register}>
                <input 
                name="email"
                type="email"
                placeholder="Введите корпоративную почту"
                value={email}
                onChange={({target} )=> updateState ('email', target.value)}
                />
                <input 
                name="name"
                type="text"
                placeholder="Имя, Фамилия"
                value={name}
                onChange={({target} )=> updateState ('name', target.value)}
                />
            
                <input 
                name="login"
                type="text"
                placeholder="Придумайте логин до 12 символов"
                value={login}
                onChange={({target} )=> updateState ('login', target.value)}
                />
                
                
                <input 
               
                name="password"
                type="password"
                placeholder="Придумайте пароль с буквами и цифрами"
                value={password}
                onChange={({target} )=> updateState ('password', target.value)}
                />
                
                 
                 {errorMessages && (<label className={styles.errorLabel}>{errorMessages}</label>)}
                 

                <button type="submit" className={styles.btn} 
               disabled={!isLoginValid || !isPasswordValid || !isEmailValid || !isNameValid}
                > Зарегистрироваться</button>
            </form>
        </div>
    )
}

// RegistrationLayout.PropTypes = {
//     isPasswordValid: PropTypes.func,
// }