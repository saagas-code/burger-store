import { Category } from "../entities/Category"

const findCategoryByName = (categories: Category[], name :string) => {
  const result = categories.find((ctg) => ctg.name === name)
  return result
}

export {findCategoryByName}