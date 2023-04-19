import { Container, Typography } from "@mui/material"


export default function ErrorPage() {
  return (
    <Container>
      <Typography sx={{
        width: '100%',
        height: '100%',
      }}>
        An Error has occurred...
      </Typography>
    </Container>
  )
}