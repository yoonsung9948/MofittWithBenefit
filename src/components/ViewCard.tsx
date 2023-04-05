import React, { useRef, useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Draggable from 'react-draggable';
import { isTupleTypeNode } from 'typescript';

interface CardProp {
  zIndex: number;
}

export default function ViewCard(props: CardProp) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<Array<string>>(['', '', '', '']);
  useEffect(() => {
    if (cardRef.current) {
      const top = cardRef.current.style.top;
      const left = cardRef.current.style.left;
      const right = cardRef.current.style.right;
      const bottom = cardRef.current.style.bottom;
      setPosition([top, left, right, bottom]);
    }
  }, [])

  const { zIndex } = props;
  return (
    <Draggable axis='x'>
      <Card sx={{ 
        maxWidth: 345, 
        zIndex: zIndex,
        position: 'absolute'
        }}>
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
