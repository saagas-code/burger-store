
import styled from "styled-components";

interface Container {
  Size: string
}

export const Container = styled.div<Container>`
  background-color: #27AE60;
  padding: 0px 20px;
  height: ${(prop) => prop.Size};
  width: 106px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-right: 100px;

  &:hover {
    background-color: #93D7AF;
    cursor: pointer;
  }

`