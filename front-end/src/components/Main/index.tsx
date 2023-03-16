import { Left } from './Left'
import { Right } from './Right'
import {Container} from './style'
import { Product } from './../../interfaces/Product';
import { useState } from 'react';


export const Main = () => {
  const [search, setSearch] = useState('');

  

  return (
    <Container>
      
      <Left />
      <Right />
     
    </Container>
  )
}