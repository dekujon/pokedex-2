import axios from "axios";
import { useState, useEffect } from "react";

import Pokelist from "./components/pokelist";
import Dex from "./components/dex";

import "animate.css";

export default function Home() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=649&offset=0",
          {
            cancelToken: new axios.CancelToken((c) => (cancel = c)),
          }
        );
        const pokeList = res.data.results;

        const pokeData = await Promise.all(
          pokeList &&
            pokeList.map(async (p) => {
              const pokeResponse = await axios.get(p.url);
              return pokeResponse.data;
            })
        );

        setPokemon(pokeData);
        setLoading(false);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    return () => cancel;
  }, []);

  const handlePokemonClick = (selectpoke) => {
    setSelectedPokemon(selectpoke);
    setIsClicked(true);
  };

  return (
    <main>
      <div className="flex m-height">
        <div className="basis-3/12 md:basis-5/12 lg:basis-7/12 ">
          <Pokelist
            loading={loading}
            pokemonData={pokemon}
            pokeOnClick={handlePokemonClick}
          />
        </div>
        <Dex loading={loading} selectedPokemon={selectedPokemon} isClicked={isClicked} />
      </div>
    </main>
  );
}
