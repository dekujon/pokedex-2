import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";

function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div className="h-10p bg-red-700 flex p-1 md:p-2 justify-center items-center border-solid border-black border-2 box-border gap-1 md:gap-2">
      {gotoPrevPage && (
        <button
          className="flex-grow btn btn-neutral text-lg sm:text-3xl md:text-4xl lg:mx-3 p-0"
          onClick={gotoPrevPage}
        >
          <BiChevronsLeft />
        </button>
      )}
      <a className=" md:h-3/6 lg:h-full sm:px-1 px-2 hidden md:block md:w-auto " href="/">
        <img
          className="h-full sm:w-8/12 md:w-auto mx-auto"
          src="https://camo.githubusercontent.com/7f1f1e69bef239378a28e8aca7d1d7bd0890d37a7871d01135e2d044da6e2157/68747470733a2f2f692e696d6775722e636f6d2f415975745a4f462e706e67"
          alt="pokedex"
        />
      </a>
      {gotoNextPage && (
        <button
          className="flex-grow btn btn-neutral text-lg sm:text-3xl md:text-4xl lg:mx-3 p-0"
          onClick={gotoNextPage}
        >
          <BiChevronsRight />
        </button>
      )}
    </div>
  );
}

export default Pagination;
