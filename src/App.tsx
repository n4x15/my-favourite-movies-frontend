import React from "react";
import "./App.css";
import LoginPage from "./components/LoginPage/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import { initAccounts } from "./Utils";

function App() {
  initAccounts();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="*" element={<h1>Nothing to do here</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
