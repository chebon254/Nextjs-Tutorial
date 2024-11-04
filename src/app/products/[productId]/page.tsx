import React from 'react'
import { Metadata } from 'next'

type Props = {
  params: {
    productId: string;
  }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> =>{
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    })
  });
  return {
    title: `Product ${title}`
  }
}

function productDetails({
  params, 
}: {
  params: { productId: string }
}) {
  return (
    <div>
      <h1>Product {params.productId} Details Pg</h1>
    </div>
  )
}

export default productDetails
