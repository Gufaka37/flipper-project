import React, {useContext, useEffect, useState} from "react";
import {LoginForm} from "./loginForm/LoginForm";
import {RegisterForm} from "./registerForm/RegisterForm";
import "./authComponent.css";
import {AuthContext} from "../../context/authContext";
import {useHttp} from "../../hooks/http.hook";
import {useMessage} from "../../hooks/message.hook";
import {registerValid} from "./validationAuth";

export const AuthComponent = ({updateAction}) => {
    const auth = useContext(AuthContext);
    const { request, loading } = useHttp();
    const message = useMessage();
    const [action, setAction] = useState("true");
    const [form, setForm] = useState({
        login: "", password: "", nickname: ""
    });
    const [validForm, setValidForm] = useState({
        flag: false,
        login: { state: false },
        password: { state: false },
        confirmedPassword: { state: false }
    });
    const [confirmPassword, setConfirmPassword] = useState("");

    useEffect(() => {
        const validation = registerValid(form, confirmPassword);
        setValidForm({
                login: validation.login,
                password: validation.password,
                confirmedPassword: validation.confirmedPassword
        });
    }, [form, confirmPassword]);

    const actionHandler = event => {
        event.preventDefault();
        setAction(!action);
        updateAction();
    }

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value});
    }

    const changeConfirmPassword = event => {
        setConfirmPassword(event.target.value);
    }

    const registerHandler = async (e) => {
        e.preventDefault();
        try {
            if (validForm.confirmedPassword.state && validForm.login.state && validForm.password.state) {
                const data = await request('/api/auth/register', 'POST', {...form});
                message(data.message);
                try {
                    const data = await request('/api/auth/login', 'POST', {...form});
                    auth.login(data.token, data.userId);
                } catch (e) {
                    console.log(e.message);
                }
            } else {
                setValidForm({flag: true, ...validForm});
            }
        } catch (e) {
            console.log(e.message);
        }
    }

    const loginHandler = async (e) => {
        e.preventDefault();
        try {
            const data = await request('/api/auth/login', 'POST', {...form});
            auth.login(data.token, data.userId);
        } catch (e) {}
    }

    return (
      <div>
          {
              action ?
                  (
                      <LoginForm
                        form={form}
                        actionHandler={actionHandler}
                        changeHandler={changeHandler}
                        loginHandler={loginHandler}
                        loading={loading}
                      />
                  ) : (
                      <RegisterForm
                          form={form}
                          actionHandler={actionHandler}
                          changeHandler={changeHandler}
                          registerHandler={registerHandler}
                          changeConfirmPassword={changeConfirmPassword}
                          confirmPassword={confirmPassword}
                          loading={loading}
                          validForm={validForm}
                      />
                  )
          }
      </div>
    );
}