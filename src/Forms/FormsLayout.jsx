import { useStore } from "../hooks/useStoreForm"
import styles from './FormsLayout.module.css'

export const FormsLayout = () => {
const { register, handleSubmit, errors, submitButtonRef } = useStore();
    return(
        <>
        <div className={styles.errorsContainer}>
        {errors.email && <div className={styles.errorLabel}>{errors.email.message}</div>}
        {errors.name && <div className={styles.errorLabel}>{errors.name.message}</div>}
        {errors.login && <div className={styles.errorLabel}>{errors.login.message}</div>}
        {errors.password && <div className='errorLabel'>{errors.password.message}</div>}
        {errors.repeatPassword && <div className='errorLabel'>{errors.repeatPassword.message}</div>}


        </div>
 <form 
        className={styles.container_form__register}
        onSubmit={handleSubmit}>
           
          <input 
          type="email" 
          {...register('email')}
          placeholder='Введите корпоративную почту' 
          />
          
          <input 
          name='name' 
          {...register('name')}
          placeholder='Введите имя'
          />
          
          <input 
          name='login' 
          {...register('login')}
          placeholder='Придумай логин от 3 до 15 символов'
          />
          
          <input 
          name='password'
          type='password' 
          {...register('password')}
          placeholder='Придумайте пароль'
          />
        
        <input 
        name="repeatPassword"
        type="password"
        {...register('repeatPassword')}
        placeholder='Повторите пароль'
        />
      
          <button 
         ref={submitButtonRef}
          type='submit' 
          disabled={Object.keys(errors).length > 0}>Отправить</button>
        </form>
        </>
       
    )
}