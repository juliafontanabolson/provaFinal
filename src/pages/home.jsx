import { Link } from 'react-router-dom';

export default function Home() {
  const linkStyle = {
    padding: '10px 20px',
    margin: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    display: 'inline-block',
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Bem-vindo à página inicial!</h1>

      <div>
          <Link to="/post" style={linkStyle}>
          Ir para Posts
        </Link>

        <Link to="/dados/123" style={linkStyle}>
          Ir para Dados
        </Link>
      </div>
    </div>
  );
}
