import React, { useState } from "react";
import "./CreateAccount.css";

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      newErrors.password = "Поле придумайте пароль обязательно";
    } else if (formData.password.length < 6) {
      newErrors.password = "Пароль должен быть не менее 6 символов";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Поле повторите пароль обязательно";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Пароли не совпадают";
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
      setFormData({ email: "", password: "", confirmPassword: "" });
    }
  };

  return (
    <div className="login-form-wrapper">
      <form className="login-form" onSubmit={handleSubmit} noValidate>
        <label>
          Логин/эл.почта*
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
          Придумайте пароль*
          <input
            type="password"
            name="password"
            placeholder="Введите пароль"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error-text">{errors.password}</p>}
        </label>
        <label>
          Повторите пароль*
          <input
            type="password"
            name="confirmPassword"
            placeholder="Повторите пароль"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <p className="error-text">{errors.confirmPassword}</p>
          )}
        </label>
        <button type="submit" className="login-button">
          ЗАРЕГИСТРИРОВАТЬСЯ
        </button>
        {isSubmitted && <p className="success-text">Аккаунт успешно создан!</p>}
      </form>
    </div>
  );
};

export default CreateAccount;
