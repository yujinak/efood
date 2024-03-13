import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { TipoRestaurante } from '../models/tipo'

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
    })
  })
})

export const { useGetRestauranteQuery, useGetRestaurantsQuery } = api
export default api
