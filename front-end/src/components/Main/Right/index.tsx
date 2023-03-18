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
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Modal } from "./../../Modal/index";
import { useEffect, useState } from "react";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Right = () => {
  const [clearIsOpen, setClearIsOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const cartItems: cartItem[] = useAppSelector(
    (state) => state.cart.foodsInCart
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setTotalPrice(GetTotalPrice(cartItems));
  }, [cartItems]);

  const finish = () => {
    if (cartItems.length > 0) {
      dispatch(FinishCart(""));
      toast.success("Compra finalizada com sucesso!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    toast.error('Não há itens no carrinho', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };

  const clearCart = () => {
    dispatch(FinishCart(""));
    toast.success("Carrinho limpo com sucesso!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
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
                    <CartItemInfoPrice>
                      {ToCurrency(i.price * i.qnt)}
                    </CartItemInfoPrice>
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
          <H2>{ToCurrency(totalPrice)}</H2>
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
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Container>
  );
};
