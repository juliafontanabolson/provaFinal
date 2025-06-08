import { Card, CardContent, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function PostCard({ post }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/dados/${post.id}`);
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card onClick={handleClick} style={{ cursor: 'pointer' }}>
        <CardContent>
          <Typography variant="h6">{post.title}</Typography>
          <Typography variant="body2">{post.body.slice(0, 100)}...</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

