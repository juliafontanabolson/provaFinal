import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Posts from './pages/Posts';
import Dados from './pages/Dados';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post" element={<Posts />} />
      <Route path="/dados/:id" element={<Dados />} />
    </Routes>
  );
}

