import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import SearchForm from '../components/SearchForm'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SearchResultList from '../components/SearchResultsList'

let cachedItems = [];

function Home() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState(cachedItems);
  const router = useRouter()
  const { q: query } = router.query

  async function fetchDatas(query) {
    try {
      let apiUrl = "https://world.openfoodfacts.org/cgi/search.pl?search_terms=" + encodeURIComponent(query) + "&search_simple=1&action=process&fields=id%2Cproduct_name%2Cimage_front_small_url&json=1&page=1&page_size=24";
      setIsLoading(true);
      const response = await fetch(apiUrl);
      const fetchedData = await response.json();
      setIsLoading(false);
      setItems(fetchedData.products);
      cachedItems = fetchedData.products;
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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <SearchForm defaultQuery={query} />

        <div className={styles.body}>
          <p>Bienvenue sur le moteur de recherche d'<a className={styles.body__link} href='https://fr.openfoodfacts.org'>Open Food Facts.</a></p>
          <p>Saisissez le nom d'un produit dans la barre de recherche pour aller lire ses informations.</p>
          {error ? <ErrorMessage errorMessage={error.message} /> : ""}
          {isLoading ? <Loading /> : <SearchResultList items={items} />}
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Loading() {
  return <p>Chargement...</p>
}

function ErrorMessage(errorMessage) {
  return <div> Erreur : {errorMessage} </div>
}

export default Home;