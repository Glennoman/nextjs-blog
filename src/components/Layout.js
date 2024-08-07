import Link from "next/link";
import Head from "next/head";

// Layout component to wrap around pages
export default function Layout({ children }) {
  return (
    <>
      {/* Head component for setting the page title and meta tags */}
      <Head>
        <title>Next.js Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/* Header with navigation links */}
      <header>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>
      </header>
      {/* Main content */}
      <main>{children}</main>
      {/* Footer */}
      <footer>
        <p>© 2024 Next.js Blog</p>
      </footer>
    </>
  );
}
