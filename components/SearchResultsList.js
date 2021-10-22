import ProductCard from "./ProductCard";
import styles from '../styles/Home.module.css'

function SearchResultList({ items }) {
    return <div>
        {items.length > 0 ?
            <div>
                <p>Résultat de la recherche :</p>
                <ul className={styles.search_result_list}>
                    {items.map(item => (
                        <li key={item.id} className={styles.product_card} tabIndex="0">
                            <ProductCard item={item} />
                        </li>
                    ))}
                </ul>
            </div> : ''}
    </div>;
}

export default SearchResultList;