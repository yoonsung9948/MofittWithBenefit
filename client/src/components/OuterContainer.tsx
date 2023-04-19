import { ReactNode, useEffect } from "react";
import { Container } from "@mui/material";

interface ConatainerProps {
  setLoading: Function;
  children: ReactNode;
  width: string | number;
}

export default function OuterContainer(props: ConatainerProps) {
  const { width } = props;
  useEffect(() => {
    setLoading(false);
  }, [])
  const { setLoading, children } = props;
  return (
    <Container sx={{
      height: '100vh',
      width: width,
      padding: 0,
      margin: 0,
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'center',
    }}>
      {children}
    </Container>
  )
}