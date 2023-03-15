import styled from "styled-components";
import { Button } from '@src/components/Button';

export const Container = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    max-width: 100%;
    margin: 0 auto;
  }
`

export const Header = styled.div`
  height: 65px;
  background-color: #27AE60;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 17px;
  font-weight: bold;
  border-radius: 5px 5px 0px 0px;
`

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #F5F5F5;
  padding: 10px;
  min-height: 280px;
  max-height: 150px;
  overflow-y: auto;
  
`

export const CartItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const CartItemImage = styled.div`
  width: 80px;
  height: 80px;
  background-color: #E0E0E0;
  border-radius: 8px;
`
export const Image = styled.img`
  width: 80px;
  height: 80px;
`

export const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 20px;
  gap: 5px;
  
`

export const CartItemInfoTitle = styled.div`
  font-weight: 700;
  font-size: 17px;
`

export const CartItemInfoCategory = styled.div`
  color: #828282;
  font-weight: 400;
  font-size: 12px;
`

export const CartItemInfoPrice = styled.div`
  
`

export const CartItemDelete = styled.div`
  color: #bdbdbd;
  cursor: pointer;

  &:hover {
    color: #828282;
  }
`


export const CartEmpty = styled.div`
  /* width: 280px; */
  background-color: #F5F5F5;
  border-radius: 0px 0px 5px 5px;
  min-height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const H1 = styled.h1`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: black;
`
export const H2 = styled.h2`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #828282;
`


// Finish Cart

export const Border = styled.div`
  margin-top: 10px;
  width: 95%;
  height: 1px;
  background-color: #E0E0E0;
  margin: 0 auto;
`

export const FinishArea = styled.div`
  height: 100px;
  background-color: #F5F5F5;
  width: 100%;
`
export const Total = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 10px;
`

export const FinishButtons = styled.div`
  display: flex;
  padding: 0px 10px;
`



export const FinishButton = styled.button`
  flex: 4;
  background-color: #E0E0E0;
  height: 50px;
  border: 0;
  border-radius: 7px;
  font-size: 17px;
  font-weight: bold;
  background-color: #27ae60;
  color: white;

  &:hover {
    color: #E0E0E0;
    cursor: pointer;
    opacity: .8;
  }
`

export const RemoveAll = styled.button`
  flex: 2;
  background-color: #E0E0E0;
  height: 50px;
  border: 0;
  padding: 10px;
  border-radius: 7px;
  font-size: 17px;
  font-weight: bold;
  color: #828282;
  margin-left: 17px;

  &:hover {
    background-color: #828282;
    color: #E0E0E0;
    cursor: pointer;
  }
`


// Modal Clear Items ------------

export const ModalContainer = styled.div`
  width: 450px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-top: 20px;
  }
  span {
    margin-top: 30px;
  }
  div {
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
  div button:first-child {
    background-color: green;
  }

  button {
    padding: 10px 20px;
    cursor: pointer;
    border: 0;
    color: white;
    background-color: red;
    border-radius: 5px;
  }
  
  button:hover {
    opacity: .6;
  }
  
`



