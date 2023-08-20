import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const PokemonListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  margin-top: 30px;
  gap: 20px;
`;

export const PokemonCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 15px;
  cursor: pointer;
  background: #fff;
  overflow: hidden;
  margin: 15px;
  box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.15);

  &:hover {
    transform: scale(1.1);  
    box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.34);
    button {
        background: #199C9C;
        color: white
    }
  }
`; 
export const Pageheader = styled.div`
background: #199C9C;
`; 
export const PageheaderTitle = styled.h1`
padding: 10px 15px;
background: #199C9C;
color: white;
text-align: center;
margin: 0;
font-size: 30px;
`; 
export const ListTitle = styled.h2`
font-size: 24px;
font-weight:bold;
margin: 0;


`; 
export const DetailCard = styled.div`
border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.10);
  padding: 10px;
  display: block;
min-height: 100px;
margin-bottom: 20px; 
  p {
    width: 50%;
    float: left;
    font-size: 14px;
    margin-bottom: 5px;
    @media screen and (max-width: 768px) {
        width: 100%;
    }

  }
  @media screen and (max-width: 768px) {
    height: 120px;
  }

`;
export const DetailTitle = styled.h4`
font-size: 18px;
color: #199C9C;
text-transform:capitalize;
`;

export const AtrTypeCard = styled.div`
border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.10);
  width: 48%;
  float: left;
  padding: 10px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    background-color:'red'
  }
  h3 {
    font-size: 16px;
    color: #199C9C;
    font-weight: bold;
  }
  ul {
    padding: 0 !important;
    li {
        list-style: none;
        font-size: 14px;
        padding-left: 10px;
      }
  }
  
  
`;
export const AtrTypeList = styled.div`
display: flex;
justify-content: space-between;
`;




export const Listheader = styled.div`
display: flex;
justify-content: space-between;
@media screen and (max-width: 585px) {
    flex-direction: column;
    gap: 15px;

}
input{
    padding: 6px 10px;
    border: 1px solid lightgray;
border-radius: 10px 0 0 10px;
&:focus {
    outline: 0px !important;
}

}
button {
border-radius: 0 10px 10px 0;
background: #199C9C;
border-color: #199C9C;
}
`; 

export const Searchwrap = styled.div`
display: flex;
`; 

export const PokemonCardImage = styled.div`
width: 100%;
height: 180px;
text-align: center;
img {
  width: auto;
  height: 100%;
  padding: 15px;
}
`; 

export const PokemoncardDetails = styled.div`
  padding: 15px;
  margin: 0 auto;
  h3 {
    font-size: 24px;
    text-align: center;
    color: #199C9C;
    text-transform: capitalize;
    padding-bottom: 10px;
  }
  button {
    padding: 10px;
    background-color: #fff;
    border: 1px solid #199C9C;
    color: #199C9C;
    margin: 0 auto;
    display: block;
    width: 150px;
    border-radius: 20px;
    &:hover {
        background: #199C9C;
        color: white
    }

}
`; 
export const PokemonCardlist = styled.div`
  background-color: #f2f2f2;
`;
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  max-width: 400px;
`;
export const Pagebtn = styled.button`
padding: 10px 15px;
border: 1px solid #199C9C;
color: #199C9C;
border-radius: 20px;
margin: 20px;
background: #fff;
width: 150px;
&:hover {
    background: #199C9C;
 color: white;
}
@media screen and (max-width: 400px) {
    width: 85%;
}
`;
export const Pagewrap = styled.div`
text-align: center;
`;
