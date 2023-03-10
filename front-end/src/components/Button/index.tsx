

import { ReactNode } from "react"
import { Container } from "./style"

interface Props {
  children: ReactNode;
  lg?: boolean;
}

export const Button = ({children, lg}: Props) => {
  return (
    <Container Size={lg ? '60px' : '40px'}>
      {children}
    </Container>
  )
}