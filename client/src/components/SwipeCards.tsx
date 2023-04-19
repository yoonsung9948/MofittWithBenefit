import React, { useRef, useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Draggable from 'react-draggable';
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



const getRelativePos = (currPos: Position, parent: HTMLElement): Position => {
  const parentRect = parent.getBoundingClientRect();
  return { x: currPos.x-parentRect.left, y: currPos.y-parentRect.top};
}

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

export default function SwipeCards(props: CardProp) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [initialized, setInitialized] = useState<boolean>(false);
  const [zIndex, setZIndex] = useState<number>(props.zIndex);
  const [initPos, setInitPos] = useState<Position>({ x: 0, y: 0 });
  const [currPos, setCurrPos] = useState<Position>({ x: 0, y: 0 });


  const leftSwipeAnimation = (ref: React.RefObject<HTMLElement>): any => {
    if (ref.current && ref.current.parentElement) {
      const { x, y } = getRelativePos(currPos, ref.current.parentElement);
      return gsap.fromTo(ref.current, {
        x: x,
      }, {
        xPercent: -150,
        opacity: 0.3,
        duration: 1.5,
      })
    }
  }
  const rightSwipeAnimation = (ref: React.RefObject<HTMLElement>): any => {
    if (ref.current && ref.current.parentElement) {
      const { x, y } = getRelativePos(currPos, ref.current.parentElement);
      return gsap.fromTo(ref.current, {
        x: x,
      }, {
        xPercent: 150,
        opacity: 0.3,
        duration: 1.5,
      })
    }
  }
  const upSwipeAnimation = (ref: React.RefObject<HTMLElement>): any => {
    if (ref.current && ref.current.parentElement) {
      const { x, y } = getRelativePos(currPos, ref.current.parentElement);
      return gsap.fromTo(ref.current, {
        y: y,
      }, {
        yPercent: -150,
        opacity: 0.3,
        duration: 1.5,
      })
    }
  }
  
  const faultySwipeAnimation = (ref: React.RefObject<HTMLElement>): any => {
    if (ref.current && ref.current.parentElement) {
      // const { x, y } = getRelativePos(currPos, ref.current.parentElement);
      // const { x: initX, y: initY } = getRelativePos(initPos, ref.current.parentElement);
      // gsap.fromTo(ref.current, {
      //   x: x,
      //   y: y,
      // }, {
      //   x: initX,
      //   y: initY,
      //   duration: 0.5,
      // })
      return gsap.to(ref.current, {
        x: 0,
        y: 0,
        duration: 0.5,
      })
    }
  }
  
  const returnToInitial = (): void => {
    if (cardRef.current) {
      const elem = cardRef.current;
      
    }
  }

  const handleSwipe = () => {
    let tween: any;
    switch (getSwipeDirection(initPos, currPos)) {
      case 'LEFT':
        tween = leftSwipeAnimation(cardRef);
        break;
      case 'RIGHT':
        tween = rightSwipeAnimation(cardRef);
        break;
      case 'UP':
        tween = upSwipeAnimation(cardRef);
        break;
      case 'FAULT':
        tween = faultySwipeAnimation(cardRef);
        break;
      default:
        tween.then(() => {
          setZIndex((zIndex+1)%5);
          returnToInitial();
        })
    }
  }

  useEffect(() => {
    setInitialized(true);
    if (cardRef.current) {
      const { x, y } = cardRef.current.getBoundingClientRect();
      setInitPos({ x, y })
      setCurrPos({ x, y })
    }
  }, [])

  useEffect(() => {
    handleSwipe();
  }, [initialized, currPos])

  const width = window.innerWidth > 992 ? 428*0.9 : '90%';
  return (
    <Draggable position={{x: 0, y: 0}} onStop={(e: any, ui: any) => {
      if (cardRef.current) {
        const {x, y} = cardRef.current.getBoundingClientRect();
        setCurrPos({ x, y });
      }
    }}>
      <Card sx={{ 
        width: width,
        height: '60%',
        zIndex: zIndex,
        position: 'absolute',
        borderRadius: '0.8rem',
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
