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
import { AiOutlineLoading3Quarters } from 'react-icons/Ai';
import { FirstUpper } from "./../../../utils/FirstLetterUpper";
import React from "react";
import Select from "react-select";
import { useState, useEffect } from "react";
import {
  Category as ICategory,
  useCategory,
} from "./../../../interfaces/Category";
import { useProducts } from "./../../../hooks/useProducts";



interface Option {
  value: string;
  label: string;
}

export const Left = () => {
  const [category, setCategory] = useState<string>("");
  const [options, setOptions] = useState<Option[]>(null || []);

  const { data: categories } = useCategory();
  const { data: products, setCategoryQuery, isLoading } = useProducts();

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

  useEffect(() => {
    if (category != "") {
      setCategoryQuery(category)
      return
    }
    setCategoryQuery("")
  }, [category]);

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
                    <Button>Adicionar</Button>
                  </CardInfo>
                </Card>
              ))}
            </>
          )}
      </Area>
    </Container>
  );
};
