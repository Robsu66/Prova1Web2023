import React, { useState } from "react";

//nesta parte declaramos as constantes que irão ser usadas e fazemos as requisições na API;
const Pokemon = () => {
  const [Virar, setVirar] = useState(false);
  const imgSrc = Virar
    ? "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/214.png"
    : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/214.png";

  //aqui é feita a função que irá realizar a "troca" da imagem ao mudar o state da variavel "Virar"
  const troca = () => {
    setVirar(!Virar);
  };

  return (
    <div>
      <img src={imgSrc} alt="Pikachu" />
      {/* aqui usamos o botão atribuindo a função "troca" a ele, logo, sempre que ele for usado a função será executada */}
      <button onClick={troca}>Virar sprite</button>
    </div>
  );
};

export default Pokemon;
