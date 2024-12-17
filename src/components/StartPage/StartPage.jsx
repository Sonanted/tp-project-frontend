import React from "react";
import { useNavigate } from "react-router-dom";
import "./StartPage.css";

const StartPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/authorization");
  };

  return (
    <div className="start-page">
      <div className="text-container">
        <p className="congratulations-text">
          Поздравляем! Этап подачи документов завершен. Впереди — самое главное
          и волнительное: отслеживать списки на поступление. Долой ежедневный
          и долгий мониторинг, программа сделает это за Вас.
        </p>
      </div>
      <button className="gradient-button" onClick={handleButtonClick}>
        НАЙТИ СЕБЯ В СПИСКЕ
      </button>
    </div>
  );
};

export default StartPage;
