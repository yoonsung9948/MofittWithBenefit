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
import { RestaurantMenu } from '@mui/icons-material';

interface CardProp {
  zIndex: number;
}

interface Position {
  x: number;
  y: number;
}

type SwipeDirection = 'LEFT' | 'RIGHT' | 'UP' | 'FAULT';

const getSwipeDirection = (prevPos: Position, currPos: Position): SwipeDirection => {
  const [dx, dy] = [currPos.x-prevPos.x, currPos.y-prevPos.y];
  const ratio = Math.abs(dx)/Math.abs(dy);
  const ratioInversed = Math.abs(dy)/Math.abs(dx);
  const RATIO_AT_LEAST = 3;
  if (dx < 0 && ratio > RATIO_AT_LEAST)
    return 'LEFT';
  else if (dx > 0 && ratio > RATIO_AT_LEAST)
    return 'RIGHT';
  else if (dy < 0 && ratioInversed > RATIO_AT_LEAST)
    return 'UP';
  else
    return 'FAULT';
}

export default function ViewCard(props: CardProp) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [initPos, setInitPos] = useState<Position>({ x: 0, y: 0 });
  const [currPos, setCurrPos] = useState<Position>({ x: 0, y: 0 });

  const leftSwipeAnimation = (ref: React.RefObject<HTMLElement>): void => {
    if (ref.current) {
      gsap.fromTo(ref.current, {
        x: currPos.x,
      }, {
        xPercent: -150,
        opacity: 0.3,
        duration: 1.5,
      })
    }
  }
  const rightSwipeAnimation = (ref: React.RefObject<HTMLElement>): void => {
    if (ref.current) {
      gsap.fromTo(ref.current, {
        x: currPos.x,
      }, {
        xPercent: 150,
        opacity: 0.3,
        duration: 1.5,
      })
    }
  }
  const upSwipeAnimation = (ref: React.RefObject<HTMLElement>): void => {
    if (ref.current) {
      gsap.fromTo(ref.current, {
        y: currPos.y,
      }, {
        yPercent: -150,
        opacity: 0.3,
        duration: 1.5,
      })
    }
  }


  const handleSwipe = (cur: Position) => {
    switch (getSwipeDirection(initPos, currPos)) {
      case 'LEFT':
        leftSwipeAnimation(cardRef);
        break;
      case 'RIGHT':
        rightSwipeAnimation(cardRef);
        break;
      case 'UP':
        upSwipeAnimation(cardRef);
        break;
      // Don't do anything in case of a faulty swipe.
    }
  }

  useEffect(() => {
    if (cardRef.current) {
      const { x, y } = cardRef.current.getBoundingClientRect();
      setInitPos({ x, y })
      setCurrPos({ x, y })
    }
  }, [])

  useEffect(() => {
    handleSwipe(currPos);
  }, [currPos])

  const { zIndex } = props;
  return (
    <Draggable position={{x: 0, y: 0}} onStop={(e: any, ui: any) => {
      if (cardRef.current) {
        const {x, y} = cardRef.current.getBoundingClientRect();
        setCurrPos({ x, y });
      }
    }}>
      <Card sx={{ 
        width: '90vw',
        height: '60vh',
        zIndex: zIndex,
        position: 'absolute',
        borderRadius: '2.25vh',
        boxShadow: '3',
        }}
        ref={cardRef}
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
