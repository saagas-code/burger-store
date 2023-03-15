import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 1040px) {
    max-width: 100%;
    overflow-x: scroll;
  }
`

export const Area = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;


  @media (max-width: 700px) {
    overflow-x: auto;
    flex-wrap: nowrap;
  }

  @media (max-width: 1360px) {
    /* max-width: 70%; */
  }

  
`

export const Card = styled.div`
  
  /* width: 280px; */
  height: 310px;
  background-color: white;
  border: 2px solid #E0E0E0;
  border-radius: 5px;
  min-width: 280px;
`

export const CardHeader = styled.div`
  height: 150px;
  background-color: #F5F5F5;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`
export const CardImage = styled.img`
  position: absolute;
  width: 150px;
  height: 150px;
`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;
`

export const Title = styled.h1`
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  color: black;
`

export const Category = styled.h2`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #828282;
`

export const Price = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #27AE60;
`

export const SortContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
`

export const CategoryArea = styled.div`
  max-width: 200px;
`

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${spinAnimation} 1s linear infinite;
  font-size: 40px;
  color: gray;
`;
