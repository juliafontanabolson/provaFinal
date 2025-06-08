import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Grid } from '@mui/material';
import PostCard from '../components/PostCard';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Lista de Posts</Typography>
      <Grid container spacing={2}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </Grid>
    </Container>
  );
}
