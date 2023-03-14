
import { useState } from 'react';
import { ModalContent, ModalWrapper} from "./styles";
import { ReactNode } from 'react';

interface Props {
  children: ReactNode
  isOpen: boolean;
  setIsOpen: (x: boolean) => void
}

export const Modal = ({children, isOpen, setIsOpen}: Props) => {

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseModal = (e: any) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* <button onClick={toggleModal}>Open Modal</button> */}
      <ModalWrapper isOpen={isOpen} onClick={handleCloseModal}>
        <ModalContent>
          {children}
        </ModalContent>
      </ModalWrapper>
    </>
  );
};

