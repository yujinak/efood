export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}
export const getTotalPrice = (items: TipoPrato[]) => {
  return items.reduce((accumulator, currentValue) => {
    if (currentValue.preco) {
      return (accumulator += currentValue.preco)
    }
    return 12
  }, 0)
}
