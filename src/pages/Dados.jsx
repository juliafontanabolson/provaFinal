import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography } from '@mui/material';

export default function Dados() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!post) return <Typography>Carregando...</Typography>;

  return (
    <Container>
      <Typography variant="h4">{post.title}</Typography>
      <Typography variant="body1">{post.body}</Typography>
    </Container>
  );
}

