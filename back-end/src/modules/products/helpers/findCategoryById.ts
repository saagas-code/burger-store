import { Category } from "../entities/Category"

const findCategoryById = (categories: Category[], id :string) => {
  const result = categories.find((ctg) => ctg.id === id)
  return result
}

export {findCategoryById}