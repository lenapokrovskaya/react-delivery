import { Link } from "react-router-dom";
import styles from './form.module.css'
// import formValidation from './FormValidation.js'


const Form = () => {
    // formValidation();
    function formValidation(e) {
        e.preventDefault();
        console.log('Отправлена форма.');
      }
    
    return (
        <body className={styles['page-body']}>
            <main className={styles['page-form']}>
                <div className={styles['container']}>
                <form className={styles['form']} method="get" action="https://echo.htmlacademy.ru">
                <h1 className={styles['form__title']}>Вход</h1>
                <div className={styles['form__item']+ ' ' +  styles['form__item-email']}>
                    <label className={styles['form__label']+ ' ' +  styles['visually-hidden']} htmlFor="email-input">E-mail</label>
                    <input className={styles['form__input']} type="email" id="email-input" name="mail" placeholder="E-mail" required/>
                    <div className={styles['form__warning-email']}>Поле обязательно для заполнения</div>
                </div>
                <div className={styles['form__item']+ ' ' +  styles['form__item-password']}>
                    <label className={styles['form__label']+ ' ' +  styles['visually-hidden']} htmlFor="password-input">Пароль</label>
                    <input className={styles['form__input']} type="password" id="password-input" name="pass" placeholder="Пароль" required/>
                    <div className={styles['form__warning-password']}>Поле обязательно для заполнения</div>
                </div>
                <div className={styles['form__item']+ ' ' +  styles['form__item-checkbox']}>
                    <input className={styles['form__input']+ ' ' +  styles['form__input-checkbox']} type="checkbox" name="check" id="checkbox-input"/>
                    <div className={styles['form__checkbox-mark']}></div>
                    <label className={styles['form__label']+ ' ' +  styles['form__label-checkbox']} htmlFor="checkbox-input">Я согласен получать обновления на почту</label>
                    <div className={styles['form__warning-password']}>Поле обязательно для заполнения</div>
                </div>
                <button onClick={formValidation} type="submit" className={styles['form__button']}>Войти</button>
            </form>
                </div>
            </main>
        </body>
    )
}

export {Form}