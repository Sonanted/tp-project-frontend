import React, { useEffect } from "react";

const TelegramAuth = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?22"; // URL виджета
    script.setAttribute("data-telegram-login", "misis_enrolled_bot");
    script.setAttribute("data-size", "large");
    script.setAttribute("data-request-access", "write"); // Запрашиваемый доступ
    script.setAttribute("data-userpic", "false");
    script.setAttribute("data-lang", "ru");
    script.setAttribute("data-callback", "onTelegramAuth"); // Callback-функция для получения данных
    script.async = true;

    document.getElementById("telegram-login").appendChild(script);

    window.onTelegramAuth = (user) => {
      console.log("User data:", user);
      alert(`Добро пожаловать, ${user.first_name}!`);
    };
  }, []);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      <div id="telegram-login"></div>
    </div>
  );
};

export default TelegramAuth;
