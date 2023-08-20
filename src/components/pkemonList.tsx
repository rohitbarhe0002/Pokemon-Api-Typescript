import React, { useState } from 'react';
import { useGetPokemonListQuery } from '@/services/api';
import { PokemonListContainer, Container, PokemonCard, PokemonCardlist, PokemoncardDetails, Listheader, Searchwrap, ListTitle, Pagebtn, Pagewrap, PokemonCardImage } from '@/styledComponent/styles';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store'; 
import { openModal } from '@/redux/slices/modalReducer';
import { Button } from 'react-bootstrap';
import pokemonGif from '@/assets/pokemon.gif'
import axios from 'axios';


const PokemonList: React.FC = () => {
  const { isOpen } = useSelector((state: RootState) => state.modalSlice);

  const router = useRouter();
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>(''); 
  const { data, error, isLoading } = useGetPokemonListQuery(page);
  const dispatch = useDispatch();


  if (isLoading) return <img src={pokemonGif}  alt='myPokemon' />;

  if (error) return <div>unable To Fetch</div>;

  const handleClick = (name: string) => {
    dispatch(openModal(!isOpen));
    router.push(`/pokemon/${name}`);
  };

  const handleSearch = async () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`).then((response) => {
    });
  };

  return (
    <PokemonCardlist>
      <Container>
        <Listheader>
          <ListTitle>Pokémon List</ListTitle>
          <Searchwrap>
            <input value={query} onChange={(e) => setQuery(e?.target?.value)} />
            <Button onClick={handleSearch}>Search</Button>
          </Searchwrap>
        </Listheader>
        <PokemonListContainer>
          {data?.results.map((pokemon) => (
            <PokemonCard key={pokemon.name}>
              <PokemonCardImage>
                <img src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`} alt={pokemon.name} />
              </PokemonCardImage>
              <PokemoncardDetails>
                <h3>{pokemon.name}</h3>
                <button onClick={() => handleClick(pokemon.name)}>Details</button>
              </PokemoncardDetails>
            </PokemonCard>
          ))}
        </PokemonListContainer>
        <Pagewrap>
          <Pagebtn onClick={()=>setPage((prev) => prev - 1)} disabled={page === 1}>Previous Page</Pagebtn>
          <Pagebtn onClick={()=>setPage((prev) => prev + 1)}>Next Page</Pagebtn>
        </Pagewrap>
      </Container>
    </PokemonCardlist>
  );
};

export default PokemonList;
