import logo from "./logo.svg";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import ScrollToTop from "./component/scrollToTop/ScrollToTop";

function App() {
  const router = useRoutes(routes);
  return (
    <div>
      <ScrollToTop />
      <div className="text-center">{router}</div>
    </div>
  );
}
export default App;
