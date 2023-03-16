import {
  Border,
  Cart,
  CartEmpty,
  CartItem,
  CartItemDelete,
  CartItemImage,
  CartItemInfo,
  CartItemInfoArea,
  CartItemInfoCategory,
  CartItemInfoPrice,
  CartItemInfoTitle,
  CartItemQnt,
  CartMinus,
  CartPlus,
  CartQnt,
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
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/Ai";
import { Modal } from "./../../Modal/index";
import { useState } from "react";
import { useAppSelector } from "./../../../redux/hooks/useAppSelector";
import {
  cartItem,
  removeFromCart,
  FinishCart,
  increaseQnt,
  minusQnt,
} from "@src/redux/reducers/Cart";
import { FirstUpper } from "./../../../utils/FirstLetterUpper";
import { useDispatch } from "react-redux";
import { GetTotalPrice } from "./../../../utils/GetTotalPrice";
import { ToCurrency } from "./../../../utils/ToCurrency";

export const Right = () => {
  const [clearIsOpen, setClearIsOpen] = useState(false);
  const cartItems: cartItem[] = useAppSelector(
    (state) => state.cart.foodsInCart
  );
  const dispatch = useDispatch();

  const finish = () => {
    if (cartItems.length > 0) {
      alert("Compra finalizada com sucesso !");
      dispatch(FinishCart(""));
      return;
    }
    alert("Não há itens no carrinho");
  };

  const clearCart = () => {
    dispatch(FinishCart(""));
    alert("Carrinho limpado com sucesso!");
    setClearIsOpen(false);
  };

  const openModal = () => {
    setClearIsOpen(true);
  };

  const removeItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Container className="">
      <Header>Carrinho de compras</Header>

      {cartItems.length > 0 && (
        <>
          <Cart>
            {cartItems.map((i, k) => (
              <CartItem key={k}>
                <CartItemImage>
                  <Image src={i.image} />
                </CartItemImage>
                <CartItemInfo>
                  <CartItemInfoArea>
                    <CartItemInfoTitle>{FirstUpper(i.name)}</CartItemInfoTitle>
                    <CartItemInfoCategory>
                      {i.category.name}
                    </CartItemInfoCategory>
                    <CartItemInfoPrice>{ToCurrency(i.price)}</CartItemInfoPrice>
                  </CartItemInfoArea>
                  <CartItemQnt>
                    <CartMinus onClick={() => dispatch(minusQnt(i.id))}>
                      <AiOutlineMinus />
                    </CartMinus>
                    <CartQnt>{i.qnt}</CartQnt>
                    <CartPlus onClick={() => dispatch(increaseQnt(i.id))}>
                      <AiOutlinePlus />
                    </CartPlus>
                  </CartItemQnt>
                </CartItemInfo>
                <CartItemDelete onClick={() => removeItem(i.id)}>
                  <BsTrash />
                </CartItemDelete>
              </CartItem>
            ))}
          </Cart>
        </>
      )}
      {cartItems.length == 0 && (
        <>
          <CartEmpty>
            <H1>Sua sacola está vazia</H1>
            <H2>Adicione itens</H2>
          </CartEmpty>
        </>
      )}
      <FinishArea>
        <Border />

        <Total>
          <H1>Total</H1>
          <H2>{ToCurrency(GetTotalPrice(cartItems))}</H2>
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
