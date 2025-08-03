// pages/_app.tsx
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1, padding: '1rem 2rem' }}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}
