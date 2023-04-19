import { Box } from "@mui/material";

import SwipeCards from "./SwipeCards";

//TODO: define cardData and modify interface accordingly.
interface SwipePageProps {
  cardData: any;
}

export default function SwipePage(props: SwipePageProps) {
  const { cardData } = props;
  const tempData: Array<number> = [1, 2, 3, 4, 5];
  return (
    <Box sx={{ 
      height: '100%',
      width: '100%',
      alignItems: 'center', 
      justifyContent: 'center',
      display: 'flex',
      }}>
        { tempData.map((z: number) => <SwipeCards zIndex={z}/>) }
    </Box>

  )
}