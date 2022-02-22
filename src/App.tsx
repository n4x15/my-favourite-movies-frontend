import React from "react";
import "./App.css";
import LoginPage from "./components/LoginPage/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";

function App() {
  localStorage.setItem("admin", "admin");
  localStorage.setItem("login", "password");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/MainPage" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
