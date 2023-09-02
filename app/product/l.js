'use client'
import React, { useEffect, useState } from 'react';
const axios = require('axios'); // Import the axios library



async function search(query) {
  const url = `https://ac.cnstrc.com/autocomplete/${query.replace(
    ' ',
    '%20'
  )}?c=ciojs-client-2.35.2&key=key_XT7bjdbvjgECO5d8&i=387bfa2f-e4f1-45ae-b367-c158a1d279c4&s=2&num_results_Products=25&num_results_Collections=20&_dt=1693651778790`;

  try {
    const response = await axios.get(url);
    const output = response.data;
    return output.sections.Products[0]['value'];
  } catch (error) {
    console.error('Error:', error);
    return null; // Handle the error or set a default value as needed
  }
}

// Call the function with your query
const query = 'jordan 1';
search(query)
  .then(result => {
    console.log('Result:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  });
