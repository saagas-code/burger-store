import {
  Border,
  Cart,
  CartEmpty,
  CartItem,
  CartItemDelete,
  CartItemImage,
  CartItemInfo,
  CartItemInfoCategory,
  CartItemInfoPrice,
  CartItemInfoTitle,
  Container,
  FinishArea,
  H1,
  H2,
  Header,
  Image,
  RemoveAll,
  Total,
} from "./style";
import { BsTrash } from "react-icons/bs";


const data = [
  {
    image: "./images/4.svg",
    name: "Hamburger",
    category: "sanduiche",
    price: 14.0,
  },
  {
    image: "./images/4.svg",
    name: "Hamburger",
    category: "sanduiche",
    price: 14.0,
  },
  {
    image: "./images/4.svg",
    name: "Hamburger",
    category: "sanduiche",
    price: 14.0,
  },
  {
    image: "./images/4.svg",
    name: "Hamburger",
    category: "sanduiche",
    price: 14.0,
  },
];

export const Right = () => {
  return (
    <Container className="">
      <Header>Carrinho de compras</Header>
      {data.length > 0 && (
        <>
          <Cart>
            {data.map((i, k) => (
              <CartItem>
                <CartItemImage>
                  <Image src={"./images/4.svg"} />
                </CartItemImage>
                <CartItemInfo>
                  <CartItemInfoTitle>X-Burger</CartItemInfoTitle>
                  <CartItemInfoCategory>Sanduíches</CartItemInfoCategory>
                  <CartItemInfoPrice>R$ 14,00</CartItemInfoPrice>
                </CartItemInfo>
                <CartItemDelete>
                  <BsTrash />
                </CartItemDelete>
              </CartItem>
            ))}
          </Cart>
        </>
      )}
      {data.length == 0 &&
        <>
          <CartEmpty>
            <H1>Sua sacola está vazia</H1>
            <H2>Adicione itens</H2>
          </CartEmpty>
        </>
      }
      <FinishArea>
        <Border/>

        <Total>
          <H1>Total</H1>
          <H2>R$ 21,00</H2>
        </Total>
        <RemoveAll>Remover Todos</RemoveAll>
      </FinishArea>

    </Container>
  );
};
