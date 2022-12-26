import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
} from '@mui/material';
import React from 'react';

const Book = ({ book }) => {
  const { title, author, imageUrl } = book;
  return (
    <Card
      sx={{
        width: '100%',
        height: '100%',
        boxShadow: '5px, 5px, 10px #ccc',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        transition: '.5s',
      }}
    >
      <div style={{ width: '100%', height: '40%', overflow: 'hidden' }}>
        <img src={imageUrl} alt="Image" width="100%" height={'100%'} />
      </div>
      <CardContent sx={{ width: '100%', height: '30%' }}>
        <Typography gutterBottom variant="h4" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Author: {author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>

      <CardActions sx={{ overflow: 'hidden', marginTop: '40px' }}>
        <Button size="small" color="warning">
          Edit
        </Button>
        <Button size="small" color="error">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Book;
