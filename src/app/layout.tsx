import Link from "next/link"

export const metadata = {
  title: 'Tutorials',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header style={{
          backgroundColor: "lightblue",
          padding: "1rem"
        }}>
          <p>Header</p>
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/product">Products</Link>
        </header>
        <main style={{
          padding: "1rem",
        }}>
          {children}
        </main>
        <footer style={{
          backgroundColor: "#eeeeee",
          padding: "1rem"
        }}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  )
}
