import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'
// Components
import SearchForm from '../../components/SearchForm'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import LoadingMessage from '../../components/LoadingMessage'
import ErrorMessage from '../../components/ErrorMessage'

function Product() {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [product, setProduct] = useState({});

    const router = useRouter()
    const { id: productId } = router.query // productId = router.query.id

    const previousPage = (e) => {
        if (e.key == 'Backspace') {
            router.back();
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", previousPage, false);
        return () => {
            document.removeEventListener("keydown", previousPage, false);
        };
    }, []);

    useEffect(() => {
        async function fetchProduct() {
            try {
                let apiUrl = "https://world.openfoodfacts.org/api/v0/product/" + encodeURIComponent(productId) + ".json?fields=product_name%2Ccategories%2Cimage_front_url%2Callergens_hierarchy%2Cingredients_text";
                setIsLoading(true);
                const response = await fetch(apiUrl);
                const fetchedData = await response.json();
                if (fetchedData.product) {
                    setIsLoading(false);
                    setProduct(fetchedData.product);
                }
            }
            catch (error) {
                setError(error);
                setIsLoading(false);
            }
        }

        fetchProduct();
    }, [productId]);

    return (
        <div className={styles.app}>
            <Head>
                <title>Produit : {product.product_name}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="https://laruchequiditoui.fr/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Header />
                <SearchForm />
                <div className={styles.body}>
                    {error ? <ErrorMessage errorMessage={error.message} /> : ""}
                    {isLoading ? <LoadingMessage /> :
                        <React.Fragment>
                            <a className={styles.product__previous_button} onClick={() => router.back()} aria-label="Page précédente">← Retour</a>
                            <div className={styles.product}>
                                {product.product_name ? <h2 className={styles.product__name}>{product.product_name}</h2> : ''}
                                {product.image_front_url ? <img src={product.image_front_url} /> : ''}
                                {product.categories ? <p className={styles.product__text}><label htmlFor="product categories" className={styles.product__label}>Categories : </label>{product.categories}</p> : ''}
                                {product.allergens_hierarchy && product.allergens_hierarchy.length != 0 ? <p className={styles.product__text}><label htmlFor="product allergens" className={styles.product__label}>Allergènes : </label>{product.allergens_hierarchy}</p> : ''}
                                {product.ingredients_text ? <p className={styles.product__text}><label htmlFor="product ingredients" className={styles.product__label}>Ingredients : </label>{product.ingredients_text}</p> : ''}
                            </div>
                        </React.Fragment>
                    }
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Product;