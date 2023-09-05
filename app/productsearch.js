'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Use 'next/router' instead of 'next/navigation'
import Page from './products/[slug]/page'

function Hi() {
  const [query1, setQuery1] = useState(''); // Input field value
  const [result, setResult] = useState(null);

  const search = async () => {
    const url = `https://ac.cnstrc.com/autocomplete/${query1.replace(
      ' ',
      '%20'
    )}?c=ciojs-client-2.35.2&key=key_XT7bjdbvjgECO5d8&i=387bfa2f-e4f1-45ae-b367-c158a1d279c4&s=2&num_results_Products=50&num_results_Collections=20&_dt=169365177690`;

    try {
      const response = await axios.get(url);
      const output = response.data;
      setResult(output.sections.Products);
    } catch (error) {
      console.error('Error:', error);
      setResult(null); // Handle the error or set a default value as needed
    }
  };

  useEffect(() => {
    // Trigger the search function when the component mounts
    search();
  }, []); // Empty dependency array because we only want to run this effect once when the component mounts

  const router = useRouter();

  const handleClick = (product) => { // Pass 'product' data as an argument
    router.push(`./products/${product.data.slug}`
    ,{ query: { name: 'psda' } });

    
  };

  

  return (
    <div>
      <h1 className='text-4xl font-bold text-center mx-auto flex justify-center mb-4'>Product Search Functionality</h1>
      <div className='flex mx-auto justify-center space-x-4 mb-4 '>
        <input
          className='rounded-full border-2 border-black p-4'
          type="text"
          placeholder="Enter your query"
          value={query1}
          onChange={(e) => setQuery1(e.target.value)}
        />
      
        <button className='rounded-full transition duration-150 ease-in-out hover:bg-gray-00 p-4 bg-black text-white transi' onClick={search}>Search</button>
      </div>

      <div>
        {result ? (
          <div className="flex flex-wrap justify-center">
            {result.map((product, index) => (
              <div onClick={() => handleClick(product)} key={index} className="p-2 m-1 border border-gray-300 w-1/1 sm:w-1/1 md:w-1/3 lg:w-1/4 xl:w-1/5">
                <div className="bg-white">
                  <h1 className='text-sm font-bold'>{product.value}</h1>
                  <p className='text-sm'> {product.data.lowest_price_cents / 100 + '$'}</p>
                  <p className='text-sm'> {product.data.release_date_year }</p>
  
                  <div className="flex justify-center">
                    <Image className='' src={product.data.image_url} width={500} height={500} alt="Product" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
}

export default Hi;
