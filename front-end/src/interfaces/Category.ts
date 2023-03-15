import { getCategories } from './../services/api/index';
import { useQuery } from 'react-query';
import { useState } from 'react';

export interface Category {
  id: string;
  name: string;
}


export const useCategory = () => {
  
  const {data, isLoading} = useQuery<Category[]>(["categories"], 
    () => getCategories()
  );

  return ({
    data, isLoading
  })
}