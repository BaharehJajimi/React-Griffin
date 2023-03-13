import React, { useEffect, useState } from "react";
import Navbar from "../layout/Navbar";
import Breadcrumb from "../commen/Breadcrumb";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";
import products from "../../core/productDatas";
import { Button } from "../commen/Button";
import Category from "../Category/Category";
import Pagination from "../pagination/Pagination";
import RightSideAccordion from "../Category/RightSideAccordion";
import CoursesCategoryList from "../../core/CourseCategoryList";

export default function Courses() {
  const [itemOffset, setItemOffset] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState();
  const [categorys, setCategorys] = useState([]);
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
  };

  const endOffset = itemOffset + 4;
  const currentItems = products.slice(itemOffset, endOffset);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * 4) % products.length;
    setItemOffset(newOffset);
  };
  //--------------------------category----------------------------------
  useEffect(() => {
    const allCategorys = [{ name: "همه دسته بندی ها" }, ...CoursesCategoryList];
    setCategorys(allCategorys);
  }, []);

  return (
    <div>
      <Navbar />
      <Breadcrumb
        links={[
          { id: 1, title: "بحر", to: "" },
          {
            id: 2,
            title: "دوره های آموزشی",
            to: "category-info/frontend",
          },
        ]}
      />
      <Category />
      <div className="container px-5 mx-auto flex flex-wrap">
        <div className="lg:w-1/4 w-full rounded-lg overflow-hidden shadow-lg p-4 text-right">
          <RightSideAccordion
            accordionCat=" مرتب سازی پیش فرض"
            productDatas={categorys}
            accordionCategory=" دسته بندی "
            categoryList={categorys}
            selectedItem={selectedCategory}
            onSelectItem={handleCategorySelect}
          />
        </div>

        <div className="flex flex-col flex-wrap lg:w-3/4 lg:pr-12 lg:text-right text-center py-6">
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {currentItems.map((pro) => (
              <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                <Link to={`/course-info/${pro.courseName}`}>
                  <div className="relative p-1 flex items-end overflow-hidden rounded-xl">
                    <img src={pro.picture} alt="Hotel Photo" />
                  </div>
                  <div className="mt-1 pb-2 block">
                    <h2 className="text-blue-900 font-bold text-right">
                      {pro.courseName}
                    </h2>

                    <div className="mt-3 flex items-end justify-between">
                      <p className="text-sm font-bold text-blue-600 text-right">
                        {pro.coursePrice}
                      </p>
                    </div>
                    <div className="">
                      <Button>سبد خرید</Button>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>

      <Pagination
        itemsPerPage={6}
        products={products}
        handlePageClick={handlePageClick}
      />
      <Footer />
    </div>
  );
}
