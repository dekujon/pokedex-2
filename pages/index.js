import axios from "axios";
import { useState, useEffect } from "react";

import Pokelist from "./components/pokelist";
import Dex from "./components/dex";
import Pagination from "./components/pagination";

import "animate.css";

export default function Home() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [nextPageUrl, setNextPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    const fetchData = async () => {
      try {
        const res = await axios.get(currentPageUrl, {
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        });
        const pokeList = res.data.results;

        setPrevPageUrl(res.data.previous);
        setNextPageUrl(res.data.next);

        const pokeData = await Promise.all(
          pokeList && pokeList.map(async (p) => {
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
  }, [currentPageUrl]);

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  const handlePokemonClick = (selectpoke) => {
    setSelectedPokemon(selectpoke);
    setIsClicked(true);
  };

  if (loading)
    return (
      <main>
        <div className="flex m-height">
          <div className="basis-3/12 md:basis-5/12 lg:basis-8/12 bg-cyan-100">
            <div className="h-90p flex justify-center items-center">
              <img
                className="animate__animated animate__flash h-12 sm:h-1/6 md:h-1/4 animate__infinite"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/770px-Pok%C3%A9_Ball_icon.svg.png"
                alt="pokeball spinner"
              />
            </div>
            <Pagination
              gotoNextPage={nextPageUrl ? gotoNextPage : null}
              gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
            />
          </div>

          <Dex selectedPokemon={selectedPokemon} isClicked={isClicked} />
        </div>
      </main>
    );

  return (
    <main>
      <div className="flex m-height">
        <div className="basis-3/12 md:basis-5/12 lg:basis-8/12 bg-cyan-100">
          <Pokelist pokemonData={pokemon} pokeOnClick={handlePokemonClick} />
          <Pagination
            gotoNextPage={nextPageUrl ? gotoNextPage : null}
            gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
          />
        </div>

        <Dex selectedPokemon={selectedPokemon} isClicked={isClicked} />
      </div>
    </main>
  );
}
