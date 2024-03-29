import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => `/product`,
        }),
        getRandomProducts: builder.query({
            query: () => `/randomProduct`,
        }),
    }),
})


export const {
    useGetAllProductsQuery,
    useGetRandomProductsQuery
} = api;