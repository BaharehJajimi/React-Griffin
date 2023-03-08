import React from "react";
import { Link } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Team from "./teacher/Team";
import CourseCard from "./course/CourseCard";
import ArticleCard from "./Articles/ArticleCard";
import Header from "./Header";
import AOS from "aos";
import Statistic from "./Statistic";
AOS.init();
export default function Landing() {
  return (
    <div>
      <div>
        <Navbar />

        <Header />

        <Statistic />

        <div data-aos="fade-up" data-aos-anchor-placement="center-center">
          <p className="text-center text-xl  sm:text-3xl  pb-5 font-bold">
            در چه حوزه ای می خوای متخصص بشی ؟
          </p>
          <p className="text-center text-lg pb-10">
            {" "}
            بازار برای متخصص هاست و هیچ موقع بی کار نمی مونید
          </p>
          <CourseCard />
        </div>

        <div data-aos="fade-up" data-aos-anchor-placement="center-center">
          <p className="text-center text-blue-900 font-bold text-lg sm:text-3xl py-12">
            اخبار و مقالات
          </p>
          <ArticleCard />
        </div>

        <div data-aos="fade-up" data-aos-anchor-placement="center-center">
          <Team />
        </div>

        <Footer />

        <script
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="sahilnetic"
          data-description="Support me on Buy me a coffee!"
          data-message=""
          data-color="#FFDD00"
          data-position="Right"
          data-x_margin="18"
          data-y_margin="18"
        ></script>
      </div>
    </div>
  );
}
