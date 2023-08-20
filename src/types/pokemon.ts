interface Ability {
    ability: {
      name: string;
      url: string;
    };
  }
  
  interface Type {
    type: {
      name: string;
      url: string;
    };
  }
  
  interface Pokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    weight: number;
    abilities: Ability[];
    types: Type[];
  }
  
  export  {Pokemon,Type,Ability};
  
  