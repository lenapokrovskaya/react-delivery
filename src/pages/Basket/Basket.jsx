import { Link } from "react-router-dom";
import styles from './basket.module.css'
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { removeCardBasket } from './../../app/reducers/counter';

const Basket = () => {
    
    const dispatch = useDispatch()
    const basketCards = useSelector((state) => state.menu.basket)
    return (
        <body className={styles['page-body']}>
            <main className={styles['page-cart']}>
                <header className={styles['page-header']+ ' ' + styles.container}>
                    <h1 className={styles['page-title']}>Корзина с выбранными товарами</h1>
                </header>
                <div className={styles['cart']+ ' ' + styles.container}>
                {basketCards.map(item => (
                    <div className={styles['cart__item']}>
                        <img src={item.img} alt="" className={styles['cart__image']} width="122" height="122"/>
                        <h2 className={styles['cart__title']}>{item.title}</h2>
                        <div className={styles['cart__specifications']}>
                            <span className={styles['cart__price']}>{item.price} ₽</span>
                            <button className={styles['cart__button']} onClick={() => dispatch(removeCardBasket(item.id))}></button>
                        </div>
                    </div>
                ))}
                </div>
            </main>
            <footer className={styles['page-footer']}>
            <div className={styles['page-footer__order']+ ' ' + styles.order + ' ' + styles.container}>
                <div className={styles['order__price']}>Заказ на сумму: 6 220 ₽</div>
                <Link className={styles['order__button']} to="/form">Оформить заказ</Link>
            </div>
        </footer>
        </body>
    )
}

export {Basket}