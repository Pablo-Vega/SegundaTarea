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
    {
      id: 5,
      imageUrl: 'https://cdn.pixabay.com/photo/2024/08/23/18/54/koala-8992580_640.png',
      altText: 'Encontré un koala',
      title: 'Encuentro inesperado',
      body: 'Encontrar un koala en su hábitat natural fue un momento mágico. Su tranquilidad y dulzura me dejaron asombrado.',
    },
    {
      id: 6,
      imageUrl: 'https://cdn.pixabay.com/photo/2024/08/02/21/54/antique-car-8940770_640.jpg',
      altText: 'Arreglé mi coche antiguo',
      title: 'Coche clásico',
      body: 'La restauración de mi coche antiguo ha sido un proyecto apasionante. Cada paso en el proceso me conecta con la historia del automóvil.',
    },
    {
      id: 7,
      imageUrl: 'https://cdn.pixabay.com/photo/2024/05/04/01/25/white-tailed-eagle-8738135_640.jpg',
      altText: 'Águila de cola blanca',
      title: 'Un momento especial',
      body: 'Ver un águila de cola blanca en el aire es un recordatorio de la majestuosidad de la naturaleza y la importancia de preservarla.',
    },
    {
      id: 8,
      imageUrl: 'https://cdn.pixabay.com/photo/2024/03/15/17/50/dogs-8635461_640.jpg',
      altText: 'Cachorro con 1 añito',
      title: 'Cachorro curioso',
      body: 'Mi cachorro es una fuente constante de alegría y energía. Su curiosidad por el mundo me recuerda la maravilla de descubrir lo nuevo cada día.',
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