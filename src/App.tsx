import React, { useState } from "react";
import "./App.css";
import LoginPage from "./components/LoginPage/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import Header from "./components/Header/Header";
import { initAccounts } from "./Utils";
import AddMoviePage from "./components/AddPage/AddMoviePage";
import PrivateRoute from "./components/PrivateRouter/privateRouter";

function App() {
  initAccounts();
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route
          path='/main-page'
          element={
            <PrivateRoute>
              <MainPage />
            </PrivateRoute>
          }
        />
        <Route
          path='/add-movie-page'
          element={
            <PrivateRoute>
              <AddMoviePage />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<h1>Nothing to do here</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
