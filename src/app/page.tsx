import Link from "next/link";

export default function home() {
    return <>
        <h1>Welcome Home</h1>
        <Link href="/blog">Blog</Link>
        <Link href="/product">Product</Link>
    </>
}