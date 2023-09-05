'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

function ProductPage() {
  const router = useRouter();
  const fname = router.query;


  return (
    <div>
        <div>
          <p>Name: is {fname}</p>
          {/* Display other product details if available */}
        </div>
    
  
    </div>
  );
}

export default ProductPage;
