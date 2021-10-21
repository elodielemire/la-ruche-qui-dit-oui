import React, { useState, useEffect } from 'react'
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
      <form onSubmit={handleSubmit}>
        <label>
          Recherche:
          <input type="text" value={query} onChange={(event) => handleChange(event.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }

  export default SearchForm;