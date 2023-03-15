import { Button } from '@src/components/Button'
import {Card, CardHeader, CardImage, CardInfo, Category, Container, Price, Title} from './style'
import { Product } from './../../../interfaces/Product';
import { FirstUpper } from './../../../utils/FirstLetterUpper';

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

interface Props {
  data: Product[]
}

export const Left = ({data}: Props) => {

  return (
    <Container className="">
      {data!.map((i, k) => (
        <Card key={k}>
          <CardHeader>
           <CardImage src={i.image} />
          </CardHeader>
          <CardInfo>
            <Title>
              {FirstUpper(i.name)}
            </Title>
            <Category>
              {FirstUpper(i.category.name)}
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