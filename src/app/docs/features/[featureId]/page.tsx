export default function Feature({ params}: {
    params: {featureId: string};
} ) {
    return <h1>Feature {params.featureId}</h1>
}