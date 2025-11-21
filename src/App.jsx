
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Details from "./Pages/Details";
import Contact from "./Pages/Contact";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import SearchResult from "./Pages/SearchResult";
import RecipesByTag from "./Pages/RecipesByTag";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
            <Route path="/search" element={<Search/>} />
             <Route path="/searchresult" element={<SearchResult/>} />
             <Route path="/recipesByTag/:tag" element={<RecipesByTag/>} />
             <Route path="/details/:tag" element={<Details/>} />
             <Route path="/contact" element={<Contact/>} />
             <Route path="/signin" element={<Signin/>} />
              <Route path="/signup" element={<Signup/>} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
