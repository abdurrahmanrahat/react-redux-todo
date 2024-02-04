import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://landing-page-server47.vercel.app/",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => ({
        url: "/events",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetTodosQuery } = baseApi;
