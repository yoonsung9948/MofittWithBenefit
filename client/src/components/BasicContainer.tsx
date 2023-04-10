import { ReactNode, useEffect } from "react";
import { Container } from "@mui/material";

interface ConatainerProps {
  setLoading: Function;
  children: ReactNode;
}

export default function BasicContainer(props: ConatainerProps) {
  useEffect(() => {
    setLoading(false);
  }, [])
  const { setLoading, children } = props;
  return (
    <Container sx={{
      height: '100vh',
      width: '100vw',
      padding: '0',
      marginTop: '10vh',
      marginRight: '0',
      marginLeft: '0',
      marginBottom: '0',
    }}>
      {children}
    </Container>
  )
}