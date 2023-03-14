import styled, { keyframes } from 'styled-components';

interface Props {
	isOpen: boolean
}

export const ModalWrapper = styled.div<Props>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  
`;

export const growUp = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const ModalContent = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
  animation: ${growUp} 0.3s ease-in-out;
  padding: 10px;
  margin-bottom: 300px;
`;

export const ModalHeader = styled.h2`
  font-size: 20px;
  margin: 16px;
`;

export const ModalBody = styled.p`
  font-size: 16px;
  margin: 16px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
`;

export const Div = styled.div`
  background-color: red;
  width: 500px;
  height: 500px;
`