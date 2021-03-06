import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
// Components
import SearchForm from '../components/SearchForm'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SearchResultList from '../components/SearchResultsList'
import LoadingMessage from '../components/LoadingMessage'
import ErrorMessage from '../components/ErrorMessage'

let cachedItems = [];

function Home() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState(cachedItems);
  const router = useRouter()
  const { q: query } = router.query // query = router.query.q = le contenu de la barre de recherche

  async function fetchDatas(query) {
    try {
      let apiUrl = "https://world.openfoodfacts.org/cgi/search.pl?search_terms=" + encodeURIComponent(query) + "&search_simple=1&action=process&fields=id%2Cproduct_name%2Cimage_front_small_url&json=1&page=1&page_size=24";
      setIsLoading(true);
      const response = await fetch(apiUrl);
      const fetchedData = await response.json();
      if (fetchedData.products) {
        setIsLoading(false);
        setItems(fetchedData.products);
        cachedItems = fetchedData.products;
      }
    }
    catch (error) {
      setError(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (!query) return;
    fetchDatas(query);
  }, [query]);

  return (
    <div className={styles.app}>
      <Head>
        <title>Open Food Facts recherche</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://laruchequiditoui.fr/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <SearchForm defaultQuery={query} />

        <div className={styles.body}>
          <p>Bienvenue sur le moteur de recherche d'<a className={styles.body__link} href='https://fr.openfoodfacts.org'>Open Food Facts.</a></p>
          <p>Saisissez le nom d'un produit dans la barre de recherche pour aller lire ses informations.</p>
          {error && <ErrorMessage errorMessage={error.message} />}
          {isLoading ? <LoadingMessage /> : <SearchResultList items={items} router={router} />}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;