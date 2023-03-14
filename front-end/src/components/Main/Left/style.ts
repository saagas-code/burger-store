import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 80%;
  justify-content: flex-start;

  @media (max-width: 1000px) {
    max-width: 100%;
    overflow-x: scroll;
  }

  @media (max-width: 700px) {
    overflow-x: auto;
    flex-wrap: nowrap;
  }
`

export const Card = styled.div`
  
  width: 280px;
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
