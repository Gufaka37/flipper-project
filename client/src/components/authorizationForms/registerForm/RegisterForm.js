import React, {useEffect} from "react";
import {validationInputs} from "../validationAuth";

export const RegisterForm = ({actionHandler, form, changeHandler, registerHandler, loading, changeConfirmPassword, confirmPassword, validForm}) => {
    useEffect(() => {
        window.M.updateTextFields();
    }, []);

    const inputsValid = () => {
        if (form.login.length === 0 || form.nickname.length === 0 || form.password.length === 0 || confirmPassword.length === 0)
            return false;
        return !(validForm.login.state === false || validForm.password.state === false);
    }

    return (
        <div className="row">
            <form className="col">
                <div className="input-field ">
                    <input
                        placeholder="Nickname"
                        id="nickname"
                        type="text"
                        name="nickname"
                        value={form.nickname}
                        onChange={changeHandler}
                        className="validate"/>
                    <label htmlFor="nickname">Enter Your Nickname</label>
                </div>
                <div className="input-field ">
                    <input
                        placeholder="Login"
                        id="login"
                        type="text"
                        name="login"
                        value={form.login}
                        onChange={changeHandler}
                        className={`${validForm.flag ? validForm.login.state ? "validate" : "invalid" : "validate"}`}
                    />
                    <label htmlFor="login">Enter Login</label>
                </div>
                <div className="input-field ">
                    <input
                        placeholder="Password"
                        id="password"
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={changeHandler}
                        className={`${form.password.length === 0 ? "validate" : validForm.password.state ? "validate" : "invalid"}`} />
                    <label htmlFor="password">Enter Password</label>
                </div>
                <div className="input-field ">
                    <input
                        placeholder="Confirm Password"
                        id="passwordConf"
                        type="password"
                        name="passwordConf"
                        value={confirmPassword}
                        onChange={changeConfirmPassword}
                        className="validate"/>
                    <label htmlFor="passwordConf">Confirm Password</label>
                </div>
                <div className="authButton">
                    <button
                        className={`btn login-btn ${loading ? "disabled" : ""} `}
                        onClick={registerHandler}
                    >
                        Register
                    </button>
                    <button className={`btn drop-btn ${loading ? "disabled" : ""}`} data-title="Log" onClick={actionHandler}>
                        <i className="material-icons">expand_less</i>
                    </button>
                </div>
            </form>
        </div>
    );
}