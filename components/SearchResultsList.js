import ProductCard from "./ProductCard";
import styles from '../styles/Home.module.css'

function SearchResultList({ items, router }) {
    return <div>
        {items.length > 0 ?
            <div>
                <p>Résultat de la recherche :</p>
                <ul className={styles.search_result_list}>
                    {items.map(item => (
                        <li key={item.product_name + '_' + item.id} className={styles.search_result_list__item}>
                            <ProductCard item={item} router={router} />
                        </li>
                    ))}
                </ul>
            </div> : ''}
    </div>;
}

export default SearchResultList;