import ReactPaginate from "react-paginate";
import React, { useState } from "react";

const Pagination = ({ itemsPerPage, products, handlePageClick }) => {
  const pageCount = Math.ceil(products.length / itemsPerPage);
 
  return (
    <>
      <ReactPaginate
        className=" flex justify-center items-center "
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel="< "
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
