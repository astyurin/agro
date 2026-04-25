import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='seo-page'>
      <header className='seo-hero'>
        <h1>404 - Page not found</h1>
        <p>The page does not exist. Use the links below to continue.</p>
      </header>
      <nav className='seo-links'>
        <Link href='/'>Main landing</Link>
        <Link href='/fishmeal-buyers'>Fishmeal country pages</Link>
      </nav>
    </main>
  );
}
