import { Left } from './Left'
import { Right } from './Right'
import {Container} from './style'
import { Product } from './../../interfaces/Product';

interface Props {
  data: Product[]
}

export const Main = ({data}: Props) => {
  return (
    <Container>
      
      <Left/>
      <Right />
     
    </Container>
  )
}