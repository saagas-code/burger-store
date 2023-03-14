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
  FinishButton,
  FinishButtons,
  H1,
  H2,
  Header,
  Image,
  ModalContainer,
  RemoveAll,
  Total,
} from "./style";
import { BsTrash } from "react-icons/bs";
import { Modal } from './../../Modal/index';
import { useState } from 'react';



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
  const [clearIsOpen, setClearIsOpen] = useState(false)
  

  const finish = () => {
    alert("Compra finalizada com sucesso !")
  }

  const clearCart = () => {
    alert("Carrinho limpado com sucesso!")
    setClearIsOpen(false)
  }

  const openModal = () => {
    setClearIsOpen(true)
  }

  return (
    <Container className="">
      <Header>Carrinho de compras</Header>
      {data.length > 0 && (
        <>
          <Cart>
            {data.map((i, k) => (
              <CartItem key={k}>
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

        <FinishButtons>
          <FinishButton onClick={() => finish()}>Finalizar compra</FinishButton>
          <RemoveAll onClick={() => openModal()}>Limpar</RemoveAll>
        </FinishButtons>
        
      </FinishArea>

      <Modal isOpen={clearIsOpen} setIsOpen={setClearIsOpen}>
        <ModalContainer>
          <h2>Alerta</h2>

          <span>Limpar todos os itens do carrinho?</span>

          <div>
            <button onClick={clearCart}>Sim</button>
            <button onClick={() => setClearIsOpen(false)}>Não</button>
          </div>
        </ModalContainer>
      </Modal>
    </Container>
  );
};
