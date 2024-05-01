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
        <header
        style={{
          backgroundColor: "lightblue",
          padding: "1rem"
        }}>
          <p>Header</p>
          <Link href="/order-product">Order</Link>
        </header>
        {children}
        <footer
          style={{
            backgroundColor: "ghostwhite",
            padding: "1rem"
          }}
        >
          <p>Footer</p>
        </footer>
      </body>
    </html>
  )
}
