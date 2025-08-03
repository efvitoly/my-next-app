// components/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header style={{
      padding: '1rem 2rem',
      backgroundColor: '#222',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h1 style={{ margin: 0 }}>My Next.js App</h1>
      <nav>
        <Link href="/" style={{ marginRight: 15, color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
      </nav>
    </header>
  );
};

export default Header;
