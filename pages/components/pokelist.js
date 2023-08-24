import React, { useState } from "react";

export default function Pokelist({ pokemonData, pokeOnClick, loading }) {
  const fallBack = "https://www.svgrepo.com/show/276264/pokeball-pokemon.svg";
  const [query, setQuery] = useState("");

  return (
    <>
      {loading ? (
        <div className="h-88p flex justify-center items-center bg-cyan-100">
          <img
            className="h-12 sm:h-1/6 md:h-1/4 animate__animated animate__flash animate__infinite"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/770px-Pok%C3%A9_Ball_icon.svg.png"
            alt="pokeball spinner"
          />
        </div>
      ) : (
        <div className="h-88p p-0.5 md:p-2 lg:p-4 bg-cyan-100 overflow-auto">
          <ul className="flex flex-col lg:flex-row gap-1 lg:gap-3 lg:flex-wrap justify-center">
            {pokemonData &&
              pokemonData
                .filter((poke) =>
                  poke.name.toLowerCase().includes(query.toLowerCase())
                )
                .map((poke) => (
                  <li
                    className={`flex xs:flex-col flex-row md:pl-2 lg:basis-5/12 lg:flex-grow  rounded-md md:rounded-lg items-center justify-between box-border cursor-pointer shadow-md lg:shadow-xl lg:hover:scale-105 text-gray-600 ${
                      poke.types["0"].type.name + "x"
                    }`}
                    key={poke.name}
                    onClick={() => pokeOnClick(poke)}
                  >
                    <div className="w-full p-0.5 sm:p-1 md:p-2">
                      <div className="flex sm:mb-1 justify-center items-center">
                        <div className="text-sm md:text-base hidden md:block">
                          #{poke.id}
                        </div>
                        <p className="flex-grow xs:p-1 text-10p sm:text-sm md:text-base  capitalize font-medium text-center ">
                          {poke.name}
                        </p>
                      </div>
                      <div className="hidden sm:flex gap-0.5 md:gap-1">
                        {poke.types?.map((t) => {
                          return (
                            <span
                              key={t.type.name}
                              className="bg-transparent uppercase text-10p md:text-xs border border-gray-600 rounded-lg flex-grow text-center sm:p-0.5"
                            >
                              {t.type.name}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    <div
                      className={`xs:order-first xs:border-none xs:w-full left-round sm:h-full flex justify-center items-center  ${
                        poke.types["0"].type.name + "y"
                      }`}
                    >
                      {poke && poke.sprites && poke.sprites.front_default ? (
                        <img
                          className="xs:w-1/2 "
                          src={poke.sprites.front_default}
                          alt={poke.name}
                        />
                      ) : (
                        <img
                          className="p-2 xs:w-1/2"
                          src={fallBack}
                          alt="Fallback"
                        />
                      )}
                    </div>

                    <img
                      className="hidden"
                      src={poke.sprites.other["official-artwork"].front_default}
                      alt={poke.name}
                    />
                  </li>
                ))}
          </ul>
        </div>
      )}

      <div className="h-12p bg-red-700 flex flex-col md:flex-row p-1 md:p-2 justify-evenly items-center border-solid border-black border-2 box-border gap-1 md:gap-4 lg:gap-0">
        <a className="sm:w-10/12 lg:w-1/2" href="/">
          <img
            className="mx-auto"
            src="https://camo.githubusercontent.com/7f1f1e69bef239378a28e8aca7d1d7bd0890d37a7871d01135e2d044da6e2157/68747470733a2f2f692e696d6775722e636f6d2f415975745a4f462e706e67"
            alt="pokedex"
          />
        </a>
        <input
          type="text"
          placeholder="Search.."
          className="input input-bordered input-error w-full md:w-7/12 lg:w-4/12 h-auto bg-red-700 text-11p text-center md:text-base md:p-1"
          onInput={(e) => setQuery(e.target.value)}
        />
      </div>
    </>
  );
}
