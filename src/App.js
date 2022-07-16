import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NoPage from "./components/pages/NoPage";
import Alert from "./components/layout/Alert";
import User from "./components/pages/User";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col justify-between hero pb-60">
        <Navbar />
        <main className="container pb-12 mx-auto px-3 h-full">
          <Alert />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/user/:login" element={<User />}></Route>
            <Route path="/*" element={<NoPage />}></Route>
          </Routes>
        </main>
      </div>
        <Footer />
    </Router>
  );
};

export default App;
