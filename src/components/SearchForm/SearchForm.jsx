import React, { useState } from "react";
import "./SearchForm.css";
import NextStepForm from "../NextStepForm/NextStepForm";

const SearchForm = () => {
  const [formData, setFormData] = useState({
    institute: "",
    program: "",
    qualification: "",
    form: "",
    budget: false,
    extrabudget: false,
    quota: false,
  });

  const [isNextStep, setIsNextStep] = useState(false);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Отправка данных на бэк:", formData);
    setTimeout(() => {
      setIsNextStep(true);
    }, 1000);
  };

  if (isNextStep) {
    return <NextStepForm />;
  }

  return (
    <div className="form-wrapper">
      <form className="selection-form" onSubmit={handleSubmit}>
        <h2 className="form-title">
          Для точности и скорости поиска, пожалуйста, заполните необходимые поля
        </h2>

        <label>
          <strong>Институт</strong>
          <select name="institute" onChange={handleChange} required>
            <option value="">Выберите институт</option>
            <option value="ИТКН">ИТКН</option>
            <option value="ИПМ">ИПМ</option>
          </select>
        </label>

        <label>
          <strong>Направление подготовки</strong>
          <select name="program" onChange={handleChange} required>
            <option value="">Выберите направление</option>
            <option value="38.03.05">38.03.05 Бизнес-информатика</option>
            <option value="09.03.01">
              09.03.01 Информатика и вычислительная техника
            </option>
          </select>
        </label>

        <label>
          <strong>Квалификация</strong>
          <select name="qualification" onChange={handleChange} required>
            <option value="">Выберите квалификацию</option>
            <option value="Бакалавриат">Бакалавриат</option>
            <option value="Магистратура">Магистратура</option>
          </select>
        </label>

        <label>
          <strong>Форма</strong>
          <select name="form" onChange={handleChange} required>
            <option value="">Выберите форму</option>
            <option value="Очная">Очная</option>
            <option value="Заочная">Заочная</option>
          </select>
        </label>

        <div className="checkbox-group-search">
          {[
            { label: "Бюджет", name: "budget" },
            { label: "Внебюджет", name: "extrabudget" },
            { label: "Целевая квота", name: "quota" },
          ].map((checkbox, index) => (
            <label key={index} className="checkbox-label">
              {checkbox.label}
              <input
                type="checkbox"
                name={checkbox.name}
                onChange={handleChange}
                checked={formData[checkbox.name]}
              />
            </label>
          ))}
        </div>

        <button type="submit" className="submit-button">
          Продолжить
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
