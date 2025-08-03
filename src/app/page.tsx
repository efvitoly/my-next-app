export default function Home() {
  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <h1 style={styles.title}>Hoş Geldin!</h1>
        <p style={styles.subtitle}>Burası senin özel Next.js anasayfan.</p>
        <a href="https://github.com/efvitoly/my-next-app" style={styles.button}>
          GitHub Repo
        </a>
      </div>
    </main>
  );
}

const styles = {
  main: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f7f7f7',
  },
  container: {
    textAlign: 'center' as const,
    padding: '2rem',
    borderRadius: '1rem',
    background: 'white',
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: '#333',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '2rem',
  },
  button: {
    padding: '0.75rem 1.5rem',
    background: '#0070f3',
    color: '#fff',
    borderRadius: '0.5rem',
    textDecoration: 'none',
    fontWeight: 'bold' as const,
  },
};
