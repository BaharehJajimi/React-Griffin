import React from "react";
import Navbar from "../Navbar";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import products from "../../core/productDatas";
import {Button} from "../commen/Button"

export default function Courses() {
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
      <div className="mx-auto grid max-w-6xl rtl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((pro) => (
          <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
            <Link to={`/course-info/${pro.courseName}`}>
              <div className="relative p-1 flex items-end overflow-hidden rounded-xl">
                <img src={pro.avatar} alt="Hotel Photo" />
              </div>
              <div className="mt-1 pb-2 block">
                <h2 className="text-slate-700 text-right">{pro.title}</h2>

                <div className="mt-3 flex items-end justify-between">
                  <p className="text-sm font-bold text-[#6C63FF] text-right">
                    {pro.price}
                  </p>
                </div>
                <div><Button>سبد خرید</Button></div>
              </div>
            </Link>
          </article>
        ))}
      </div>
      <Footer />
    </div>
  );
}
