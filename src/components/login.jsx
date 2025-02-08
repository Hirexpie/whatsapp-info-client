import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../store/auth";
import { api } from "../Api/index";
import "../CSS/login.css";

export const Login = () => {
    const dispatch = useDispatch();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const state = useSelector(state => state.auth.token)

    const handleLogin = async () => {
        try {
            const { data } = await api.post("/user/login", {
                login,
                password,
            });
            dispatch(logIn(data));
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
