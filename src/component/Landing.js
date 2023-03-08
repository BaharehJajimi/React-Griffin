import React from "react";
import { Link } from "react-router";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
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


          <p className="text-center text-blue-900 font-bold text-lg sm:text-3xl pt-12">
            در چه حوزه ای می خوای متخصص بشی ؟
          </p>
          <p className="text-center text-blue-900 text-sm sm:text-2xl pt-2 pb-12">
            بازار برای متخصص هاست و هیچ موقع بی کار نمی مونید
          </p>
          <CourseCard />



          <p className="text-center text-blue-900 font-bold text-lg sm:text-3xl pt-16 pb-12">
            اخبار و مقالات
          </p>
          <ArticleCard />



          <Team />

        
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
