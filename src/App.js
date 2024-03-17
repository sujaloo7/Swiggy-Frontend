import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./pages";
import Header from "./components/Header";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Search from "./pages/search";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
      {/* <Footer /> */}
    </>
  );
}

export default App;
