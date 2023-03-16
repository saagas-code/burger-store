import { Button } from "../Button"
import { Container, Input } from "./style"
import { useState } from 'react';
import { useProducts } from './../../hooks/useProducts';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { setSearchQuery } from "@src/redux/reducers/Search";
import { useAppSelector } from './../../redux/hooks/useAppSelector';



export const SearchInput = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchQuery(search))
    console.log(search)
  }, [search])
  

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