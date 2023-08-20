import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder:any) => ({
    getPokemonList: builder.query({
      query: (page: number = 1) => `pokemon?limit=20&offset=${(page - 1) * 20}`,
    }),
    getPokemonByName: builder.query({
      query: (name: string) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery, useGetPokemonListQuery } = pokemonApi;
