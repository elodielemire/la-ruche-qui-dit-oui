import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'
import SearchForm from '../../components/SearchForm'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

function Product() {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [product, setProduct] = useState({});

    const router = useRouter()
    const { id: productId } = router.query

    // fetch await page d'acceuil
    // créer composants à partir des fonctions
    // vérifier si le nom existe : faire un if
    // créer le composant header
    // renommer Home.module.css en main.css

    useEffect(() => {
        async function fetchProduct() {
            try {
                let apiUrl = "https://world.openfoodfacts.org/api/v0/product/" + encodeURIComponent(productId) + ".json?fields=product_name%2Ccategories%2Cimage_front_url%2Callergens_hierarchy%2Cingredients_text";
                setIsLoading(true);
                const response = await fetch(apiUrl);
                const fetchedData = await response.json();
                setIsLoading(false);
                setProduct(fetchedData.product);
            }
            catch (error) {
                setError(error);
                setIsLoading(false);
            }
        }

        fetchProduct();
    }, [productId]);

    return (
        <div>
            <Head>
                <title>{product.product_name}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Header />

                <SearchForm />

                <br/>

                {product.product_name}
            </main>

            <Footer />
        </div>
    );
}



export default Product;