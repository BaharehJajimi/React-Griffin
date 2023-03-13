import React, { useState } from "react";

export default function Category({}) {
  const [searchValue, setSearchValue] = useState("");
  const [coursesDisplayType, setCoursesDisplayType] = useState("row");

  const searchValueChangeHandler = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <section class="my-5">
        <div class="max-w-7xl mx-auto">
          <div class="flex justify-between items-center shadow-md rounded-lg py-3 px-4">
            <div>
              <form action="#" className="relative w-full mr-6">
                <input
                  type="text"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-300 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="جستجوی دوره ..."
                  value={searchValue}
                  onChange={searchValueChangeHandler}
                />
                <i className="fas fa-search absolute top-3 left-4 text-gray-400"></i>
              </form>
            </div>
            <div class="flex items-center">
              <div
                className={`flex justify-center items-center border border-gray-300 ml-3 rounded-md w-14 h-12 cursor-pointer ${
                  coursesDisplayType === "row" ? "bg-blue-600 text-white" : ""
                }`}
                onClick={() => setCoursesDisplayType("row")}
              >
                <i className="fas fa-border-all"></i>
              </div>
              <div
                className={`flex justify-center items-center border border-gray-300 ml-6 rounded-md w-14 h-12 cursor-pointer ${
                  coursesDisplayType === "column"
                    ? "bg-blue-600 text-white"
                    : ""
                }`}
                onClick={() => setCoursesDisplayType("column")}
              >
                <i className="fas fa-align-left"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
