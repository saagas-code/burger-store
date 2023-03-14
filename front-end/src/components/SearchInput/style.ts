import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 5px;
  background-color: white;
  border-radius: 10px;
  gap: 10px;
  border: 2px solid #E0E0E0;
  /* margin-right: 100px; */

  @media (max-width: 700px) {
    margin-right: 0px;
  }

  
  
`

export const Input = styled.input`
  text-decoration: none;
  border: 0;
  outline: none;
  margin-left: 10px;
  color: black;
  /* z-index: 9999; */
`



