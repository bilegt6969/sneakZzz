'use client'
import React, { useState } from 'react';
import Hi from './components/Header';
import Banner from './components/Banner';
import Head from 'next/head';

function Page() {
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = (value: React.SetStateAction<null>) => {
    setSearchResult(value);
  };

  return (
    <div>
      <Head>
        <title>lynx</title>
      </Head>
      <Hi onSearch={handleSearch} />
      <main className='max-w-screen-2xl mx-auto'>
        <Banner result={searchResult} />
      </main>
    </div>
  );
}

export default Page;
