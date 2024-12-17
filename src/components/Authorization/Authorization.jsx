import React from "react";
import { useNavigate } from "react-router-dom";
import "./Authorization.css";
import telegramLogo from "../../assets/telegram-240.svg";

const Authorization = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/telegram-auth");
  };

  const handleAlternativeLogin = () => {
    navigate("/login-form");
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <div className="auth-block">
          <img src={telegramLogo} alt="Telegram" className="telegram-logo" />
          <p className="auth-title">Авторизация через Telegram</p>
          <button className="auth-button" onClick={handleLogin}>
            ВОЙТИ
          </button>
          <p className="auth-alt-text" onClick={handleAlternativeLogin}>
            Другой способ авторизации
          </p>
        </div>
      </div>
    </div>
  );
};

export default Authorization;
