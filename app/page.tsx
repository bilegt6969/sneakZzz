import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Head from 'next/head'




function page() {
  return (
    <div>
      <Head>
      <title>Sneakz</title>
      </Head>
      <Header/>
      <main className='max-w-screen-2xl mx-auto'>
      <Banner/>
      </main>


      </div>

      
  )
}

export default page