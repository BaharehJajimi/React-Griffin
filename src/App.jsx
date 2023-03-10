import logo from "./logo.svg";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import ScrollAuto from "./component/scrollAuto/ScrollAuto";
import ScrollToTop from "react-scroll-to-top";

function App() {
  const router = useRoutes(routes);
  return (
    <div>
      <ScrollAuto />
      <ScrollToTop smooth component={<p><i className="fas fa-arrow-up text-orange-500 text-xl"></i></p>} />
      <div className="text-center">{router}</div>
    </div>
  );
}
export default App;
