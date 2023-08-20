import React from 'react';
import { useRouter } from 'next/router';
import { useGetPokemonByNameQuery } from '@/services/api';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '@/redux/slices/modalReducer';
import { Spinner } from 'react-bootstrap';
import { AtrTypeCard, AtrTypeList, DetailCard, DetailTitle, PokemonCardImage } from '@/styledComponent/styles';
import { Ability, Type } from '@/types/pokemon';
import { RootState } from '@/redux/store';

const PokemonDetailsPage = () => {

  const { isOpen } = useSelector((state: RootState) => state.modalSlice);
  const router = useRouter();

  const { name } = router.query;

  const { data, error, isLoading } = useGetPokemonByNameQuery(name as string);

  const dispatch = useDispatch();

  if (!router.isReady || isLoading) {
    return <Spinner style={{display:'flex',justifyContent:'center'}} animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>;
  }

  if (!data) return <h1>No data found</h1>;

  if (error) return <h1>unable to Fetch</h1>;

  const handleModalClose = () => {
    dispatch(openModal(!isOpen))
    router.push('/')
  }

  return (
    <div>
      <Modal centered show={isOpen} onHide={() => handleModalClose()} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            <DetailTitle>
              {data?.name}
            </DetailTitle>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PokemonCardImage>
            <img src={`https://img.pokemondb.net/artwork/large/${data.name}.jpg`} alt={data.name}></img>
          </PokemonCardImage>
          <DetailCard>
            <p>ID: {data?.id}</p>
            <p>Base Experience: {data?.base_experience}</p>
            <p>Height: {data?.height}</p>
            <p>Weight: {data?.weight}</p>
          </DetailCard>
          <AtrTypeList>
            <AtrTypeCard>
              <h3>Abilities:</h3>
              <ul>
                {data?.abilities.map((ability: Ability) => (
                  <li key={ability.ability.name}>{ability.ability.name}</li>
                ))}
              </ul>
            </AtrTypeCard>
            <AtrTypeCard>
              <h3>Types:</h3>
              <ul>
                {data?.types.map((type: Type) => (
                  <li key={type.type.name}>{type.type.name}</li>
                ))}
              </ul>
            </AtrTypeCard>
          </AtrTypeList>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PokemonDetailsPage;
