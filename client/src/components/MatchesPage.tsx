import { Container } from "@mui/material";
import MatchedProfiles from "./MatchedProfiles";

export default function MatchesPage() {
  return (
    <Container sx={{
      height: '100%',
      width: '90%',
      paddingTop: '5rem',
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 0,
    }}>
      {
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(():any => <MatchedProfiles/>)
      }
    </Container>
  )
}