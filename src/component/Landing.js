import React from "react";
import { Link } from "react-router";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Team from "./teacher/Team";
import CourseCard from "./course/CourseCard";
import ArticleCard from "./Articles/ArticleCard";
import Header from "./Header";
import AOS from "aos";
import Statistic from "./statistic/Statistic";
import { HeaderSection } from "./commen/HeaderSection";
import Categorises from "./categories/Categorises"
import StudentIdea from "./studentIdea/StudentIdea"
import Ideas from "./Ideas/Ideas"
AOS.init();

export default function Landing() {
  return (
    <div>
      <div>
        <Navbar />
        <Header />
        <Statistic />

        <HeaderSection>در چه حوزه ای می خوای متخصص بشی ؟</HeaderSection>
        <CourseCard />

        <HeaderSection>دسته بندی</HeaderSection>
        <Categorises />

        <HeaderSection>اخبار و مقالات</HeaderSection>
        <ArticleCard />

        <HeaderSection>تیم حرفه ای ما</HeaderSection>
        <Team />

        <HeaderSection>نظرات دانشجویان</HeaderSection>
        <StudentIdea />

        <HeaderSection>انتقادات و پیشنهادات</HeaderSection>
        <Ideas />

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
