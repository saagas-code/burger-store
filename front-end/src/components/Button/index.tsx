

import { ReactNode } from "react"
import { Container } from "./style"

interface Props {
  children: ReactNode;
  lg?: boolean;
}

export const Button = ({children, lg}: Props) => {
  return (
    <Container Size={lg ? '40px' : '35px'}>
      {children}
    </Container>
  )
}