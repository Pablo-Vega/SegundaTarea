import React from 'react';
import Testimonio from './components/Testimonio';
import { Typography, Grid2 } from '@mui/material';

const App = () => {
  const testimoniosData = [
    {
      id: 1,
      imageUrl: 'pumpkins.jpg',
      altText: 'Calabazas',
      title: 'Preparando Halloween',
      body: 'Las calabazas son una parte esencial de la decoración de Halloween. ¡Me encanta cómo estas calabazas aportan magia y color a esta festividad!',
    },
    {
      id: 2,
      imageUrl: 'lizard.jpg',
      altText: 'Lagarto',
      title: 'Visita al zoo',
      body: 'Ver un lagarto en su hábitat fue fascinante. Su colorido y su forma de moverse me recordaron la diversidad de la naturaleza.',
    },
    {
      id: 3,
      imageUrl: 'https://cdn.pixabay.com/photo/2016/11/14/03/06/woman-1822459_960_720.jpg',
      altText: 'Mujer sonriendo con confianza',
      title: 'Vida sana',
      body: 'Mantener un estilo de vida saludable no solo me beneficia a mí, sino que también me inspira a motivar a otros a cuidar de sí mismos.',
    },
    {
      id: 4,
      imageUrl: 'cat.png',
      altText: 'Gato',
      title: 'Mi gato Dexter',
      body: 'Dexter es mi compañero juguetón que ilumina mis días con sus travesuras y su curiosidad por explorar todo a su alrededor.',
    },
  ];

  return (
    <div>
      <Typography variant="h4" component="h2" sx={{ marginBottom: '20px', textAlign: 'center' }}>
        Tiltagram
      </Typography>

      <Grid2 container spacing={2} justifyContent="center">
        {testimoniosData.map((testimonio) => (
          <Grid2 item xs={12} sm={6} md={4} key={testimonio.id}>
            <Testimonio
              imageUrl={testimonio.imageUrl}
              altText={testimonio.altText}
              title={testimonio.title}
              body={testimonio.body}
            />
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
};

export default App;