import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../store/auth";
import { api } from "../Api/index";
import "../CSS/login.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const dispatch = useDispatch();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const {token,id} = useSelector(state => state.auth)
    useEffect(() => {
        if (token !== null) {
          navigate(`/${id}/Massages`); 
        }
    }, [token,navigate,id]);

    const handleLogin = async () => {
        try {
            const { data } = await api.post("/user/login", {
                login,
                password,
            });
            dispatch(logIn(data));
            window.location.reload();

        } catch (error) {
            console.error("Ошибка при входе:", error.response?.data || error.message);
            alert("Ошибка авторизации.");
        }
    };

    return (
        <div className="login-container">
            <h2>Вход</h2>
            <div className="login-form">
                <input
                    className="login-input"
                    type="text"
                    placeholder="Логин"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    required
                />
                <input
                    className="login-input"
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button className="login-button" onClick={handleLogin} type="submit">
                    Войти
                </button>
            </div>
        </div>
    );
};
