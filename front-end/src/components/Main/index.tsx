import { Left } from './Left'
import { Right } from './Right'
import {Container} from './style'
import { useState } from 'react';


export const Main = () => {
  return (
    <Container>
      
      <Left />
      <Right />
     
    </Container>
  )
}