import styled from "styled-components";

export const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 15px;
  padding: 0px 50px;

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
