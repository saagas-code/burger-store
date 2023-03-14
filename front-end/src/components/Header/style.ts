import styled from "styled-components";

export const StyledContainer = styled.div`
  background-color: #F5F5F5;
  font-weight: 'semiBold';
`

export const Area = styled.div`
  max-width: 1500px; 
  margin: 0 auto;
  display: flex;
  /* height: 80px; */
  justify-content: space-between;
  align-items: center;
  padding: 10px 80px;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Logo = styled.div`
  /* margin-left: 100px; */
  font-weight: bold;
  font-size: 25px;
  font-style: italic;

  @media (max-width: 700px) {
    margin-left: 0px;
    margin-bottom: 10px;
  }
`

export const Search = styled.div`

`