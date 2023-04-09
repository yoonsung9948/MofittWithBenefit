import React, { useRef, useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Draggable from 'react-draggable';
import { isTupleTypeNode } from 'typescript';
import { gsap } from 'gsap';
import { Container } from '@mui/material';

interface CardProp {
  zIndex: number;
}

export default function ViewCard(props: CardProp) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<Array<number>>([0, 0, 0, 0]);
  const [pointerPos, setPointerPos] = useState<Array<number>>([0, 0]);


  const { zIndex } = props;
  return (
    <Draggable position={{x: 0, y: 0}}>
      <Card sx={{ 
        width: '90vw',
        height: '60vh',
        zIndex: zIndex,
        position: 'absolute',
        borderRadius: '2.25vh',
        boxShadow: '3',
        }}
        >
        <CardActionArea disableTouchRipple={true} sx={{ cursor: 'unset' }}>
          <CardMedia
            component="img"
            height="300"
            image="./13131.jpeg"
            alt="person"
            sx={{ pointerEvents: 'none' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              WonYoung Jang
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Age: 18
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Draggable>
  );
};
