export default function productReview({ params }: {
    params: {
        productid: string;
        reviewId: string;
    };
} ) {
    return <h1>Review {params.reviewId} for product {params.productid}</h1>
}