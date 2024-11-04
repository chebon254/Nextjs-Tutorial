import React from 'react'
import { notFound } from 'next/navigation'

function reviewDetail(
    {params, } : {
        params : { 
            reviewId : string
            productId: string
         };
    }
) {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      <h1>{params.reviewId} Review Detail for product { params.productId }</h1>
    </div>
  )
}

export default reviewDetail
