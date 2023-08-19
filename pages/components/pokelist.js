import React from "react";

export default function Pokelist({ pokemonData, pokeOnClick }) {
  const fallBack = "https://www.svgrepo.com/show/276264/pokeball-pokemon.svg";

  return (
    <div className="h-90p flex flex-col md:flex-row p-0.5 md:p-2 overflow-auto">
      <ul className="flex flex-col md:flex-row md:flex-wrap md:gap-1 md:p-0.5 lg:gap-2  justify-around flex-grow">
        {pokemonData && pokemonData.map((poke) => (
          <li
            className={`lg:p-2 basis-20p lg:basis-1/6 ${poke.types['0'].type.name + 'x'} border border-black md:border-none rounded-lg md:rounded-2xl flex flex-row md:flex-col  items-center justify-center box-border cursor-pointer lg:card lg:shadow-xl md:hover:scale-105`}
            key={poke.name}
            onClick={() => pokeOnClick(poke)}
          >
            {poke && poke.sprites && poke.sprites.front_default ? (
              <img
                className="p-2 sm:p-0 sm:w-3/12 md:w-9/12 lg:w-6/12"
                src={poke.sprites.front_default}
                alt={poke.name}
              />
            ) : (
              <img
                className="p-6 sm:p-2 sm:w-3/12 md:w-9/12 lg:w-6/12"
                src={fallBack}
                alt="Fallback"
              />
            )}

            <img
              className="hidden"
              src={poke.sprites.other["official-artwork"].front_default}
              alt={poke.name}
            />
            <p className="capitalize font-medium text-center hidden sm:block text-11p lg:text-sm ml-0.5 md:ml-0 md:mt-1">
              {poke.name}
            </p>
          </li>
        ))}
      </ul>
      <div></div>
    </div>
  );
}
