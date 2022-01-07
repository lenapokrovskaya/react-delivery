import styles from './card.module.css'
import { useDispatch } from 'react-redux';
import { addBasket } from '../../../app/reducers/counter';
import { Link } from "react-router-dom";

const Card = (props) => {
    const dispatch = useDispatch()

    function dispatchReducers () {
        dispatch(addBasket(props.id))
        // dispatch(counterProduct())
    }

    return (    
        <li className={styles['products__item']}>
            <article className={styles['products__card']}>
                <Link className={styles['products__img-link']} to="#">
                    <img className={styles['products__img']} src={props.img} alt="" width="270" height="271"/> 
                </Link>
                <h3 className={styles['products__title']}>
                    <Link className={styles['products__link']} to="#">{props.title}</Link>
                </h3>
                <p className={styles['products__description']}>{props.description}</p>
                <div className={styles['products__wrapper-bottom']}>
                    <div className={styles['products__specifications']}>
                        <span className={styles['products__price']}>{props.price} ₽</span>
                        <span className={styles['products__weight']}> / {props.weight} </span>
                    </div>
                    <button className={styles['products__button']} onClick={() => dispatch(addBasket(props.id))}></button>
                </div>                
            </article>           
        </li>
    )
}

export {Card}