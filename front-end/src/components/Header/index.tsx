import { SearchInput } from "../SearchInput"
import { Logo, Search, StyledContainer } from "./style"

export const Header = () => {
  return (
    <StyledContainer>
      <Logo>
        Burger
      </Logo>
      <Search>
        <SearchInput />
      </Search>
    </StyledContainer>
  )
}
