import { Button } from "../Button"
import { Container, Input } from "./style"

export interface Props {
  setSearch: (x: string) => void;
}

export const SearchInput = ({setSearch}: Props) => {

  return (
    <div className="">
      <Container>
        <Input onChange={(e) => setSearch(e.target.value)} placeholder="O que você procura?">

        </Input>
        <Button>
          Pesquisar
        </Button>
      </Container>
    </div>
  )
}