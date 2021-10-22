import Link from 'next/link'
import styles from '../styles/Home.module.css'

function ProductCard({ item }) {
    return <Link href={"/product/" + item.id}>
        <a>
            {item.image_front_small_url ?
                <img src={item.image_front_small_url} alt={item.product_name} className={styles.product_card__img} />
                : <img src="/picture-missing.jpg" alt="Pas d'image produit" className={styles.product_card__img} />}

            <p className={styles.product_card__text}>{item.product_name ? item.product_name : 'Nom du produit manquant'}</p>
            <button className={styles.product_card__button}>Voir plus</button>
        </a>
    </Link>
}

export default ProductCard;