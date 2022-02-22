import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./assets/logo.svg";
import "./assets/LoginPage.css";
import LoginInput from "./components/LoginInput";
import Button from "@mui/material/Button";

const LoginPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorInput, setError] = useState("");
  const navigate = useNavigate();

  const checkPassword = () => {
    if (login && password !== "") {
      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (login === key && password === localStorage.getItem(key)) {
          navigate("./MainPage", { replace: true });
          return;
        } else {
          setError("неверный логин или пароль");
          setTimeout(() => {
            setError("");
          }, 2000);
        }
      }
    } else {
      setError("Вы не ввели логин или пароль");
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  return (
    <div className="w-full max-w-xs">
      <form
        name="loginForm"
        className="bg-slate-50 shadow-md rounded px-8 pt-6 pb-8 mb-4 "
      >
        <div className="w-full max-w-xs">
          <img src={logo} alt="Login"></img>
          <p className="m-2">Введите логин</p>
          <div>
            <LoginInput setInput={setLogin} />
          </div>
          <p className="text-red-600">{errorInput}</p>
          <p className="m-2">Введите пароль</p>
          <div>
            <LoginInput setInput={setPassword} />
          </div>
          <div>
            <Button className="m-2" variant="contained" onClick={checkPassword}>
              Войти
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
