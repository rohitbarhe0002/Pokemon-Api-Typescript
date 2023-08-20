import React from 'react';
import PokemonList from '@/components/pkemonList';
import { Pageheader } from '@/styledComponent/styles';

const HomePage  = () => {
  return (
    <>
      <Pageheader>
        <div
          style={{
            padding: "10px 15px",
            background: "#199C9C",
            color: "white",
            textAlign: "center"
          }}
        >
          Welcome to Pokémon App
        </div>
        <PokemonList />
      </Pageheader>
    </>
  );
};

export default HomePage;
