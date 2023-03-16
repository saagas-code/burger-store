import { useState } from "react";
import { SearchInput } from "../SearchInput";
import { Area, Logo, Search, StyledContainer } from "./style";
import { useProducts } from './../../hooks/useProducts';

export const Header = () => {
  

  return (
    <StyledContainer>
      <Area>
        <Logo>Burger</Logo>
        <Search>
          <SearchInput/>
        </Search>
      </Area>
    </StyledContainer>
  );
};
