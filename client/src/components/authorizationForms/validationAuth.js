export const registerValid = (form, confirmPassword) => {
    const loginValid = () => {
        if (form.login.length < 4)
            return {state: false, error: "Length must be longer than 4 characters"};
        return {state: true, error: ""};
    }

    const passwordValid = () => {
        if (form.password.length < 6)
            return {state: false, error: "Length must be longer than 6 characters"};
        return {state: true, error: ""};
    }

    const confirmPasswordValid = () => {
        if (form.password !== confirmPassword)
            return {state: false, error: "Passwords do not match"};
        return {state: true, error: ""};
    }

    const login = loginValid();
    const password = passwordValid();
    const confirmedPassword = confirmPasswordValid();
    return { login, password, confirmedPassword }
}

export const validationInputs = (input, value) => {
    switch (input) {
        case "login":
            
            return true;
        case "password":
            break;
        case "confirmPassword":
            break;
    }
}