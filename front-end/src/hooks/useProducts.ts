
import { getProducts } from './../services/api/index';
import { useQuery } from 'react-query';
import { Product } from './../interfaces/Product';
import { useState } from 'react';

export const useProducts = () => {
  const [categoryQuery, setCategoryQuery] = useState('')
  const [nameQuery, setNameQuery] = useState('')

  const {data, isLoading} = useQuery<Product[]>(["products", categoryQuery, nameQuery], 
    () => getProducts(categoryQuery, nameQuery)
  );

  return ({
    data, isLoading, setCategoryQuery, setNameQuery, nameQuery
  })
}