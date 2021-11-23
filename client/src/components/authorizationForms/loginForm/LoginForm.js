import React, {useEffect} from "react";
import './loginForm.css';

export const LoginForm = ({actionHandler, form, changeHandler, loginHandler}) => {
    useEffect(() => {
        window.M.updateTextFields();
    }, []);

    return (
        <div className="row">
            <form className="col">
                <div className="input-field ">
                    <input
                        placeholder="Login"
                        id="login"
                        type="text"
                        name="login"
                        className="validate"
                        value={form.login}
                        onChange={changeHandler}
                    />
                    <label htmlFor="login">Enter Login</label>
                </div>
                <div className="input-field ">
                    <input
                        placeholder="Password"
                        id="password"
                        type="password"
                        name="password"
                        className="validate"
                        value={form.password}
                        onChange={changeHandler}
                    />
                    <label htmlFor="password">Enter Password</label>
                </div>
                <div className="authButton">
                    <button
                        className="btn login-btn"
                        onClick={loginHandler}
                    >
                        Login
                    </button>
                    <button className="btn drop-btn" data-title="Reg" onClick={actionHandler}>
                        <i className="material-icons">expand_more</i>
                    </button>
                </div>
            </form>
        </div>
    );
}