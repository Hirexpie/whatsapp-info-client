import React from "react";
import "../CSS/NotFound.css";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <h1>404</h1>
      <p>Страница не найдена</p>
      <button onClick={() => navigate("/")}>На главную</button>
    </div>
  );
};


