import { Container, Card, Avatar, Typography } from "@mui/material";

type MatchCardProps = any;

export default function MatchCard(props: MatchCardProps) {
  return (
    <Card sx={{
      height: '15vh', 
      border: 'solid',
      borderRadius: '0.8rem',
      display: 'flex',
      flex: 'column',
      margin: '0.5rem',
    }}>
      <Container sx={{
        display: 'flex',
        flex: 'column',
        margin: '0',
        padding: '0.5rem',
        width: '60%',
        justifyContent: 'left',
      }}>
        <Avatar
          alt="장원영"
          src="./13131.jpeg"
          sx={{ 
            width: '8vh', 
            height: '8vh',
          }}
        />
        <Typography>Wonyoung Jang</Typography>
      </Container>
    </Card>
  )
}