import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
      newErrors.email = "Поле логин/эл.почта обязательно";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Некорректный формат почты";
    }

    if (!formData.password) {
      newErrors.password = "Поле пароль обязательно";
    } else if (formData.password.length < 6) {
      newErrors.password = "Пароль должен быть не менее 6 символов";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setIsSubmitted(true);
      console.log("Данные формы:", formData);
      setFormData({ email: "", password: "" });
    }
  };

  return (
    <div className="login-form-wrapper">
      <form className="login-form" onSubmit={handleSubmit} noValidate>
        <label>
          Логин/эл.почта
          <input
            type="text"
            name="email"
            placeholder="Введите логин или почту"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </label>
        <label>
          Пароль
          <input
            type="password"
            name="password"
            placeholder="Введите пароль"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error-text">{errors.password}</p>}
        </label>
        <button type="submit" className="login-button">
          ВОЙТИ
        </button>
        {isSubmitted && (
          <p className="success-text">Форма успешно отправлена!</p>
        )}
        <p
          className="no-account-text"
          onClick={() => navigate("/create-account")}
        >
          У меня нет аккаунта
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
