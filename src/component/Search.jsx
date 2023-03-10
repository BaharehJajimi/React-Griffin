const Search = () => {
  return (
    <fieldset className="w-1/3 z-20 relative bottom-1 text-blue-900 mx-auto flex-wrap p-2 flex-col md:flex-row items-center flex rounded-xl rounded-t-none border border-white/80 bg-white bg-opacity-80 drop-shadow-md backdrop-blur-2xl backdrop-saturate-200">
      <label for="Search" className="hidden">
        جستجو
      </label>
      <div className="relative mx-auto w-full">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <button
            type="button"
            title="search"
            className="p-1 focus:outline-none focus:ring"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 512 512"
              className="w-4 h-4 text-blue-900"
            >
              <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
            </svg>
          </button>
        </span>
        <input
          type="search"
          name="Search"
          placeholder="دنبال چی می گردی؟"
          className="w-full bg-opacity-50 rounded border border-gray-200 focus:border-orange-300 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
    </fieldset>
  );
};

export default Search;
