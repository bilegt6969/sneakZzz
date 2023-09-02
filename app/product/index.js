'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductSearch() { // Renamed the function to start with an uppercase letter
  const [query, setQuery] = useState(''); // Input field value
  const [result, setResult] = useState(null);

  const search = async () => {
    const url = `https://ac.cnstrc.com/autocomplete/${query.replace(
      ' ',
      '%20'
    )}?c=ciojs-client-2.35.2&key=key_XT7bjdbvjgECO5d8&i=387bfa2f-e4f1-45ae-b367-c158a1d279c4&s=2&num_results_Products=25&num_results_Collections=20&_dt=1693651778790`;

    try {
      const response = await axios.get(url);
      const output = response.data;
      setResult(output.sections.Products[0]['value']);
    } catch (error) {
      console.error('Error:', error);
      setResult(null); // Handle the error or set a default value as needed
    }
  };

  useEffect(() => {
    // Trigger the search function when the query state changes
    search();
  }, [query]); // Now it depends on the 'query' state

  return (
    <div>
      <h1>Product Search</h1>
      <input
        type="text"
        placeholder="Enter your query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={search}>Search</button>
      <div>
        {result ? (
          <div>
            <h2>Result:</h2>
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </div>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
}

export default ProductSearch; // Export the component
