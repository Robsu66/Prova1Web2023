import React from "react";

//o componente recebe as propriedades "correntistas" e "calcularMedias"
//usando map é calculado a média das aplicações de cada correntista e armaenado no array "medias"
//a função calcular média é chamada e passada o array medias como argumento, ela serve para atualizar o estado "medias" no componente
const Questao01Y = ({ correntistas, calcularMedias }) => {
  const medias = correntistas.map((correntista) => {
    const { pp, rf, cc } = correntista.aplic;
    return (pp + rf + cc) / 3;
  });

  calcularMedias(medias);

  return null; // O componente não precisa renderizar nada
};
//é definido o array "correntistas" com os dados dos correntistas e suas aplicações
//a função atualizar médias é definida para ser chamada no componente "questao01Y" e receber as médias calculadas como argumento
//é feita uma verificação para exibir o nome do correntista com a maior média de aplicações a partir do índice das funções "Math.Max" e "indexOf"

const Questao01X = () => {
  const correntistas = [
    { nome: "Sicrano", aplic: { pp: 856.4, rf: 50.4, cc: 34.0 } },
    { nome: "Beltrano", aplic: { pp: 0.0, rf: 700.67, cc: 800 } },
    { nome: "Fulano", aplic: { pp: 5000.0, rf: 0.0, cc: 500 } }
  ];

  const [medias, setMedias] = React.useState([]);

  const atualizarMedias = (mediasCalculadas) => {
    setMedias(mediasCalculadas);
  };

  return (
    <div>
      <Questao01Y
        correntistas={correntistas}
        calcularMedias={atualizarMedias}
      />
      {medias.length > 0 && (
        <h1>
          Correntista com maior média de aplicações:{" "}
          {correntistas[medias.indexOf(Math.max(...medias))].nome}
        </h1>
      )}
    </div>
  );
};

export default Questao01X;
