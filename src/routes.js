
import Landing from './component/Landing';
import CourseInfo from './component/course/CourseInfo';
import Courses from './component/course/Courses';
import ArticleInfo from './component/Articles/ArticleInfo';
import Articles from './component/Articles/Articles';
import TeacherInfos from './component/teacher/TeacherInfos';
import Contact from './component/Contact/Contact';
import AboutUs from './component/About/AboutUs';
import Register from './component/form2/Register/Register';
import Login from './component/form2/Login/Login';

const routes = [ 
    { path: '/', element: <Landing /> },
    { path: '/about', element: <AboutUs /> },
    { path: '/course-info/:courseName', element: <CourseInfo /> },
    { path: '/courses/:page', element: <Courses /> },
    { path: '/article-info/:articleName', element: <ArticleInfo /> },
    { path: '/articles/:page', element: <Articles /> },
    { path: '/teacher-info/:ID', element: <TeacherInfos /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '/contact', element: <Contact /> },

]

export default routes