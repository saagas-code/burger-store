import { Button } from "@src/components/Button";
import {
  Area,
  Card,
  CardHeader,
  CardImage,
  CardInfo,
  Category,
  CategoryArea,
  Container,
  Loading,
  Price,
  SortContainer,
  Title,
} from "./style";

import { FirstUpper } from "./../../../utils/FirstLetterUpper";
import React from "react";
import Select from "react-select";
import { useState, useEffect } from "react";
import {
  Category as ICategory,
  useCategory,
} from "./../../../interfaces/Category";
import { useProducts } from "./../../../hooks/useProducts";
import { useAppSelector } from './../../../redux/hooks/useAppSelector';
import { useDispatch } from 'react-redux';
import { addToCart } from "@src/redux/reducers/Cart";
import { AiOutlineLoading3Quarters } from 'react-icons/ai';



interface Option {
  value: string;
  label: string;
}

export const Left = () => {
  const [category, setCategory] = useState<string>("");
  const [options, setOptions] = useState<Option[]>(null || []);
  const searchQuery = useAppSelector(state => state.search.searchh)
  const dispatch = useDispatch();
  
  const { data: categories } = useCategory();
  const { data: products, setCategoryQuery, isLoading, setNameQuery } = useProducts();


  // filta pelo nome do item
  useEffect(() => {
    setNameQuery(searchQuery)
  }, [searchQuery])

  // Get Categories List
  useEffect(() => {
    if (categories) {
      let array = [] as Option[];
      categories!.map((cat) => {
        const obj: Option = {
          value: cat.id,
          label: FirstUpper(cat.name),
        };
        array.push(obj);
      });
      setOptions(array);
    }
  }, [categories]);

  // atualiza os produtos dependendo das categorias
  useEffect(() => {
    if (category != "") {
      setCategoryQuery(category)
      return
    }
    setCategoryQuery("")
  }, [category]);


  const addToCartt = (index: number) => {
    if (products) {
      let tmpItem: any = products[index]
      tmpItem.qnt = 1
      dispatch(addToCart(products[index]!))
    }
  }

  return (
    <Container>
      <SortContainer>
        <CategoryArea>
          <Select
            onChange={(e: any) => {
              e !== null ? setCategory(e.value) : setCategory("");
            }}
            placeholder="Categoria"
            options={options}
            isClearable={true}
          />
        </CategoryArea>
      </SortContainer>
      <Area className="">
        {isLoading ? 
          <Loading>
            <AiOutlineLoading3Quarters />
          </Loading>
        :
          (
            <>
              {products!.map((i, k) => (
                <Card key={k}>
                  <CardHeader>
                    <CardImage src={i.image} />
                  </CardHeader>
                  <CardInfo>
                    <Title>{FirstUpper(i.name)}</Title>
                    <Category>{FirstUpper(i.category.name)}</Category>
                    <Price>R$ {i.price}</Price>

                    <div onClick={() => addToCartt(k)} className="">
                      <Button >Adicionar</Button>
                    </div>

                  </CardInfo>
                </Card>
              ))}
            </>
          )}
      </Area>
    </Container>
  );
};
