import axios from 'axios'

const PORT = process.env.REACT_APP_PORT_BACK || 4000
axios.defaults.baseURL = `http://localhost:${PORT}`

export const getProducts = async (category: string, name: string) => {
  
  const {data} = await axios.get(`/products?category=${category}&name=${name}`)
  // console.log(data)
  return data
}

export const getCategories = async () => {
  const {data} = await axios.get('/categories')
  return data
}