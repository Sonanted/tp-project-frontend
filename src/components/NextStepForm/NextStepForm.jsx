import React from "react";
import "./NextStepForm.css";

const NextStepForm = () => {
  return (
    <div className="form-wrapper">
      <form className="selection-form">
        <h2 className="form-title">
          Для точности и скорости поиска, пожалуйста, заполните необходимые поля
        </h2>

        <label>
          <strong>Номер СНИЛС:</strong>
          <input type="text" name="snils" placeholder="Введите номер СНИЛС" />
        </label>

        <label>
          <strong>Как к Вам обращаться?</strong>
          <input type="text" name="name" placeholder="Введите имя" />
        </label>

        <button type="submit" className="submit-button">
          Завершить
        </button>
      </form>
    </div>
  );
};

export default NextStepForm;
