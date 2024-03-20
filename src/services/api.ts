import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Plate = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Plate[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getRestaurante: builder.query<TipoRestaurante, string>({
      query: (id) => `restaurantes/${id}`
    }),
    getRestaurants: builder.query<TipoRestaurante[], void>({
      query: () => 'restaurantes'
    }),
    purchase: builder.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestauranteQuery,
  useGetRestaurantsQuery,
  usePurchaseMutation
} = api
export default api
