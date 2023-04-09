import { Card, Avatar } from "@mui/material";

type MatchCardProps = any;

export default function MatchCard(props: MatchCardProps) {
  return (
    <Card sx={{
      height: '15vh', 
      border: 'solid',
      borderRadius: '3.5vw',
      display: 'flex',
      flex: 'column',
    }}>
      <Avatar
        alt="장원영"
        src="./13131.jpeg"
        sx={{ 
          width: 56, 
          height: 56,
          margin: '0.5rem',
        }}
      />
      <h6>Wonyoung Jang</h6>
    </Card>
  )
}