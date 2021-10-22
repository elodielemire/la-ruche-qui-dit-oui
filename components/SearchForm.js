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
    <form className={styles.search_form} onSubmit={handleSubmit}>
      <input className={styles.search_form__input} type="text" value={query} onChange={(event) => handleChange(event.target.value)} placeholder="Chercher un produit" />
      <input className={styles.search_form__button} type="submit" value="Recherche" />
    </form>


  );
}

export default SearchForm;