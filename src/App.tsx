import React from "react";
import "./App.css";
import LoginPage from "./components/LoginPage/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import Header from "./components/Header/Header"
import { initAccounts } from "./Utils";

function App() {
  initAccounts();
  return (
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/AddMoviePage" />
        <Route path="*" element={<h1>Nothing to do here</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
