import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Bem-vindo à página inicial!</h1>

      <button>
        <Link to="/src/Posts.jsx" style={{ textDecoration: 'none', color: 'inherit' }}>
          Ir para Posts
        </Link>
      </button>

      <button>
        <Link to="/src/Dados.jsx" style={{ textDecoration: 'none', color: 'inherit' }}>
          Ir para Dados (id: 123)
        </Link>
      </button>
    </div>
  );
}
