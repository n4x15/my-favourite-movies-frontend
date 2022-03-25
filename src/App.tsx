import React, { useState } from "react";
import "./App.css";
import LoginPage from "./components/LoginPage/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import Header from "./components/Header/Header";
import { initAccounts } from "./Utils";
import AddMoviePage from "./components/AddPage/AddMoviePage";

function App() {
  const [isBlockView, setView] = useState<boolean>(true);

  initAccounts();
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/main_page' element={<MainPage />} />
        <Route path='/add_movie_page' element={<AddMoviePage />} />
        <Route path='*' element={<h1>Nothing to do here</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
