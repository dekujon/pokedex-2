function Dex({ selectedPokemon, isClicked }) {

  const fallBack = 'https://cdn.pixabay.com/photo/2016/08/15/00/50/pokeball-1594373_1280.png'

  return (
    <div className="basis-9/12 md:basis-7/12 lg:basis-4/12 relative">
      <img
        className="h-screen w-full"
        src="https://e1.pxfuel.com/desktop-wallpaper/694/543/desktop-wallpaper-pokedex-template-by-hatirem-pokemon-pokedex-background.jpg"
        alt="pokeball"
      ></img>

      {isClicked ? (
        <div className="absolute z-10 text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10/12 flex flex-col">
          <p className="absolute top-0 right-0 badge badge-neutral font-semibold text-11p sm:text-base">
            #{selectedPokemon.id}
          </p>

          {selectedPokemon && selectedPokemon.sprites && selectedPokemon.sprites.other["official-artwork"].front_default ? (
            <img
              className="mx-auto w-4/12 sm:w-4/12 lg:w-5/12"
              src={selectedPokemon.sprites.other["official-artwork"].front_default}
              alt={selectedPokemon.name}
            />
          ) : (
            <img
              className="mx-auto w-3/12 sm:w-3/12 lg:w-4/12"
              src={fallBack}
              alt="Fallback"
            />
          )}

          <h2 className="font-bold capitalize text-sm sm:text-base md:text-lg lg:text-xl my-1">
            {selectedPokemon.name}
          </h2>

          <div>
            {selectedPokemon.types?.map((t) => {
              return (
                <span key={t.type.name}
                  className={`mx-1 bg-transparent font-bold p-1 uppercase text-xs text-white ${t.type.name}`}
                >
                  {t.type.name}
                </span>
              );
            })}
          </div>

          <div className="mt-2">
            {selectedPokemon.stats?.map((poke) => {
              return (
                <table key={poke.stat.name} className="border-2 border-transparent w-full sm:w-11/12 md:w-10/12 lg-w-11/12 mx-auto">
                  <tbody>
                    <tr>
                      <td className="w-5/12 sm:w-4/12 lg:w-5/12">
                        <p className="capitalize text-11p sm:text-xs font-semibold text-start">
                          {poke.stat.name}
                        </p>
                      </td>
                      <td>
                        <div className="capitalize font-semibold  bg-neutral-200 dark:bg-neutral-600 flex">
                          <div
                            className="bg-green-300 p-0.5  text-center text-xs font-medium leading-none text-primary-100"
                            style={{ width: (poke.base_stat / 180) * 100 + "%" }}
                          >
                            {poke.base_stat}
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              );
            })}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Dex;
