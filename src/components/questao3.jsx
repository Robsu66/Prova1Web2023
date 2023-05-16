import React, { useEffect, useState } from "react";

//utiliza o hook "useEffect" para fazer uma chamada assíncrona à API
//dentro do use effect é definida uma função assincrona para buscar os dados do processamento
//é calculada a média dos países e os que estão acima dela são filtrados
//as filtradas são armazenadas no estado usando setCapitais
const Questao3 = () => {
  const [capitais, setCapitais] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/region/europe?fields=capital,population"
        );
        const data = await response.json();

        const populationSum = data.reduce(
          (sum, country) => sum + country.population,
          0
        );
        const populationAverage = populationSum / data.length;

        const filteredCapitais = data
          .filter((country) => country.population > populationAverage)
          .map((country) => country.capital[0]);

        setCapitais(filteredCapitais);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Capitais com população acima da média:</h2>
      <ul>
        {capitais.map((capital, index) => (
          <li key={index}>{capital}</li>
        ))}
      </ul>
    </div>
  );
};

export default Questao3;
