import { Link } from 'react-router-dom';
import styles from './main.module.css'
import {Card} from '../../components/elements/Card/Card';
import { useSelector } from 'react-redux';


const Main = () => {
    const menu = useSelector((state) => state.menu.menu)
    console.log('menu', menu)
    return (
        <body className={styles['page-body']}>
            <main className={styles['page-catalog']}>
                <div className={styles.container}>
                    <header className={styles['page-header']}>
                        <h1 className={styles['page-title']}>Наша продукция</h1>
                        <Link className={styles['page-basket']} to="/basket">
                        <span className={styles['page-basket__count']}>0</span> товара на сумму <span class="page-basket__price">0</span> ₽
                        </Link>
                    </header>

                    <section className={styles['catalog']}>
                        <ul className={styles['catalog__list']}>
                            {menu.map(item => (
                                <Card
                                id={item.id}
                                img={item.img}
                                title={item.title}
                                description={item.description}    
                                price={item.price}   
                                weight={item.weight}            
                                />
                            ))}          
                        </ul>
                    </section>
                </div>
            </main>
        </body>
    )
}

export {Main}