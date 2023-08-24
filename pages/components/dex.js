function Dex({ selectedPokemon, isClicked, loading }) {
  return (
    <div className="basis-9/12 md:basis-7/12 lg:basis-5/12 m-height relative">
      <img
        className="h-full w-full"
        src="https://e1.pxfuel.com/desktop-wallpaper/694/543/desktop-wallpaper-pokedex-template-by-hatirem-pokemon-pokedex-background.jpg"
        alt="pokedex"
      ></img>

      {loading ? (
        <div className="absolute z-10 text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10/12 flex flex-col">
          <img
            className="w-5/12 mx-auto"
            src="https://archives.bulbagarden.net/media/upload/thumb/1/10/0479Rotom-Pok%C3%A9dex.png/220px-0479Rotom-Pok%C3%A9dex.png"
            alt="rotomdex"
          />
          <p className="text-sm md:text-md lg:text-lg font-medium mt-3">
            Now Loading...
          </p>
        </div>
      ) : (
        <div className="absolute z-10 text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10/12 flex flex-col">
          {isClicked ? (
            <>
              <p className="absolute top-0 right-0 badge badge-neutral font-semibold text-11p sm:text-base">
                #{selectedPokemon.id}
              </p>

              {selectedPokemon &&
                selectedPokemon.sprites &&
                selectedPokemon.sprites.other["official-artwork"]
                  .front_default && (
                  <img
                    className="mx-auto w-4/12 sm:w-4/12"
                    src={
                      selectedPokemon.sprites.other["official-artwork"]
                        .front_default
                    }
                    alt={selectedPokemon.name}
                  />
                )}

              <h2 className="font-bold capitalize text-sm sm:text-base md:text-lg lg:text-xl my-1">
                {selectedPokemon.name}
              </h2>

              <div>
                {selectedPokemon.types?.map((t) => {
                  return (
                    <span
                      key={t.type.name}
                      className={`mx-1 font-bold p-1 uppercase text-xs text-white ${t.type.name}`}
                    >
                      {t.type.name}
                    </span>
                  );
                })}
              </div>

              <div className="mt-2">
                {selectedPokemon.stats?.map((poke) => {
                  return (
                    <table
                      key={poke.stat.name}
                      className="border-2 border-transparent w-full sm:w-11/12 md:w-10/12 mx-auto"
                    >
                      <tbody>
                        <tr>
                          <td className="w-5/12 sm:w-4/12 lg:w-5/12">
                            <p className="capitalize text-10p sm:text-xs font-medium text-start">
                              {poke.stat.name}
                            </p>
                          </td>
                          <td>
                            <div className=" bg-neutral-200 dark:bg-neutral-600 flex">
                              <div
                                className="bg-green-300 p-0.5 text-center text-xs font-medium leading-none text-primary-100"
                                style={{
                                  width: (poke.base_stat / 180) * 100 + "%",
                                }}
                              >
                                <span className="text-10p front-medium">
                                  {poke.base_stat}
                                </span>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <img
                className="w-5/12 mx-auto"
                src="https://archives.bulbagarden.net/media/upload/thumb/1/10/0479Rotom-Pok%C3%A9dex.png/220px-0479Rotom-Pok%C3%A9dex.png"
                alt="rotomdex"
              />
              <p className="text-sm md:text-md lg:text-lg font-medium mt-3">
                Select a Pokemon
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Dex;
