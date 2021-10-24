import Link from 'next/link'
import styles from '../styles/Home.module.css'

function ProductCard({ item, router }) {
    function handleKeypress(e, item) {
        e.preventDefault();
        if (e.key == 'Enter') {
            router.push('/product/' + item.id)
        }
    }

    return <div className={styles.product_card} onKeyPress={(e) => handleKeypress(e, item)} tabIndex="0" aria-label={"Ouvir le produit " + item.product_name}>
        <Link href={"/product/" + item.id}>
            <a>
                {item.image_front_small_url ?
                    <div className={styles.product_card__img_container}><img src={item.image_front_small_url} alt={item.product_name} className={styles.product_card__img} /></div>
                    : <div className={styles.product_card__img_container}><img src="/picture-missing.jpg" alt="Pas d'image produit" className={styles.product_card__img} /></div>}

                <p className={styles.product_card__text}>{item.product_name ? item.product_name : 'Nom du produit manquant'}</p>
                <button className={styles.product_card__button}>Voir plus</button>
            </a>
        </Link>
    </div>
}

export default ProductCard;