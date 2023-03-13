import { useState } from "react";
import { SearchInput } from "../SearchInput"
import { Logo, Search, StyledContainer } from "./style"

interface Props {
  setSearch: (x: string) => void;
}

export const Header = ({setSearch}: Props) => {
  

  return (
    <StyledContainer>
      <Logo>
        Burger
      </Logo>
      <Search>
        <SearchInput setSearch={setSearch} />
      </Search>
    </StyledContainer>
  )
}
