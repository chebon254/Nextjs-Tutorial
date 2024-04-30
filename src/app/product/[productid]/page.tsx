export default function producttDetail({ params}: {
    params: {productid: string};
} ) {
    return <h1>Product Details {params.productid}</h1>
}