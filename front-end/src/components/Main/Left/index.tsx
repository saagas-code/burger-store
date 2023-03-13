import { Button } from '@src/components/Button'
import {Card, CardHeader, CardImage, CardInfo, Category, Container, Price, Title} from './style'

const list = [
  {
    image: './images/4.svg',
    name: 'Hamburger',
    category: 'sanduiche',
    price: 14.00
  },
  {
    image: './images/2.svg',
    name: 'Hamburger2',
    category: 'sanduiche2',
    price: 15.00
  },
  {
    image: './images/3.svg',
    name: 'Hamburger',
    category: 'sanduiche',
    price: 14.00
  }
  ,
  {
    image: './images/3.svg',
    name: 'Hamburger',
    category: 'sanduiche',
    price: 14.00
  }
]

export const Left = () => {

  return (
    <Container className="">
      {list.map((i, k) => (
        <Card key={k}>
          <CardHeader>
           <CardImage src={i.image} />
          </CardHeader>
          <CardInfo>
            <Title>
              {i.name}
            </Title>
            <Category>
              {i.category}
            </Category>
            <Price>
              R$ {i.price}
            </Price>
            <Button>
              Adicionar
            </Button>

          </CardInfo>
        </Card>
      ))}
    </Container>
  )
}