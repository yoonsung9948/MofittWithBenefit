import { Container } from "@mui/material";
import MatchCard from "./MatchCard";

export default function Matched() {
  return (
    <Container sx={{height: '80%'}}>
      {
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(():any => <MatchCard/>)
      }
    </Container>
  )
}