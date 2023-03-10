import { Button } from "../Button"
import { Container, Input } from "./style"



export const SearchInput = () => {
  return (
    <div className="">
      <Container>
        <Input placeholder="O que você procura?">

        </Input>
        <Button>
          Pesquisar
        </Button>
      </Container>
    </div>
  )
}