import Header from '../components/Header';

export default function Home() {
  return (
    <div style={{
      backgroundColor: '#121212',
      minHeight: '100vh',
      color: 'white',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Header />
      <main style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h2>Welcome to the Dark Themed Home Page!</h2>
      </main>
    </div>
  );
}
