import { Routes, Route } from 'react-router-dom';
import Posts from './pages/Posts';
import Dados from './pages/Dados';

export default function App() {
  return (
    <Routes>
      <Route path="/post" element={<Posts />} />
      <Route path="/dados/:id" element={<Dados />} />
    </Routes>
  );
}

