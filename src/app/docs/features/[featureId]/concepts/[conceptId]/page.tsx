export default function Feature({ params}: {
    params: {
        featureId: string;
        conceptId: string;
    };
} ) {
    return <h1>Concept {params.conceptId} for Feature {params.featureId}</h1>
}