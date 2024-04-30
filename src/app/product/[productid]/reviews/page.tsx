export default function productReview({ params}: {
    params: {productId: string};
} ) {
    return (
        <>
            <h1>Product {params.productId} Reviews</h1>
            <ul>
                <li>Amazing</li>
                <li>Good</li>
            </ul>
        </>
    )
}