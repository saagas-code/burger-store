import { Product } from "@prisma/client";


const listProductsByQueryParams = (products: Product[], name?: string, category?: string): Product[] => {
  const result = products.filter((product: Product) => {
    if (name && !product.name.includes(name.toLocaleLowerCase())) {
      return false
    }
    if (category && product.category_id !== category) {
      return false
    }
    return true
  })

  return result
}

export {listProductsByQueryParams}