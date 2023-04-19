import { Container, Box, Card } from "@mui/material";

export default function ProfilePage() {
  return (
    <Container sx={{ height: '100%', width: '90%', padding: 0}}>
      <Card sx={{
        border: 'solid',
        marginTop: '5rem',
        height: '50%',
        borderRadius: '0.8rem',
      }}>
        <h1> Some Profile</h1>
      </Card>
      <Box sx={{
        maxHeight: '35%', 
      }}>
        <p>
          The early morning sun cast a warm glow over the dewy grass, as the birds sang their cheerful melodies. John pulled on his running shoes and headed out the door, feeling the crisp air fill his lungs. He set a steady pace and let his mind wander, enjoying the solitude of the quiet streets. As he rounded the corner, he saw a small group of children playing tag in the park, their laughter filling the air. 
        </p>
      </Box>
    </Container>
  )
}