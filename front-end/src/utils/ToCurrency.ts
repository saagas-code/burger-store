

export const ToCurrency = (number: number) => {
  return number.toLocaleString("pt-BR", {style:"currency", currency:"BRL", minimumFractionDigits: 2})
}