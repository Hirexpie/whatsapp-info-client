import React, { useState } from "react";
import "../CSS/register.css";
import { api } from "../Api";

export const Registration = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    password2: "",

  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.password2) {
        alert('Повтороите пароль!!!')
        return
    }
    api.post('/register',{
        nikname:formData.username,
        password:formData.password
    })
    window.location.reload();


  };

  return (
    <div className="registration-container">
      <h2>Регистрация</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <input
          type="text"
          name="username"
          placeholder="Имя пользователя"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password2"
          placeholder="повторите Пароль"
          value={formData.password2}
          onChange={handleChange}
          required
        />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

