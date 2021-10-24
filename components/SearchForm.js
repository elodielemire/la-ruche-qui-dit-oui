import React, { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

function SearchForm({ defaultQuery }) {
  const [query, setQuery] = useState('');
  const router = useRouter()

  function handleSubmit(event) {
    event.preventDefault();
    router.push('/?q=' + query);
    //onSubmit(query)
  }

  function handleChange(value) {
    setQuery(value)
  }

  // Called when defaultQuery changes
  useEffect(() => {
    if (!defaultQuery) return;
    setQuery(defaultQuery);
  }, [defaultQuery]);

  return (
    <form role="search" aria-label="Moteur de recherche principal" className={styles.search_form} onSubmit={handleSubmit}>
      <label htmlFor="Entrer un produit à rechercher"></label>
      <input className={styles.search_form__input} type="text" value={query} onChange={(event) => handleChange(event.target.value)} placeholder="Chercher un produit" />
      <label htmlFor="Bouton recherche"></label>
      <input className={styles.search_form__button} type="submit" aria-label="Chercher un produit" value="Recherche" />
    </form>


  );
}

export default SearchForm;