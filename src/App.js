import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PAGES from "./consants/pageRoutes";
import Home from "./pages/Home/Home";
import AboutUs from "pages/AboutUs/AboutUs";
import News from "pages/News/News";
import BlogDetail from "pages/BlogDetail/BlogDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={PAGES.HOME} element={<Home />} />
        <Route path={PAGES.ABOUT_US} element={<AboutUs />} />
        <Route path={PAGES.NEWS} element={<News />} />
        <Route path={PAGES.BLOG_DETAIL} element={<BlogDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
