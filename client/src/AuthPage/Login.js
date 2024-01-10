import React, { useState } from "react";
import { Logo } from "./Logo";
import { Input } from "../shared/components";
import { emailValidationMessage, passwordValidationMessage, validateEmail, validatePassword } from "../shared/validators";
import { useLogin } from "../shared/hooks";

export const Login = ({ switchAuthHandle }) => {

  const {login, isLoading} = useLogin()

  const [formState, setFormState] = useState({
    email: {
      value: "",
      isValid: false,
      showError: false,
    },
    password: {
      value: "",
      isValid: false,
      showError: false,
    },
  });

  const handleInputValueChang = (value, field) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        value,
      },
    }));
  };

  const handleInputValidationOnBlur = (value, field) => {
    let isValid = false;

    switch (field) {
        case 'email':
            isValid = validateEmail(value);
        break;
        case 'password':
            isValid = validatePassword(value);
        break;
        default:
            break;
    }

    setFormState(prevState => ({
        ...prevState,
        [field]: {
            ...prevState[field],
            isValid,
            showError: !isValid,
        }
    }))
  }

//   console.log(formState);

    const handleLogin = (event) =>{
        event.preventDefault();

        login(formState.email.value, formState.password.value)
    }

    const isSubmitButtonDisabled = isLoading || !formState.password.isValid || !formState.email.isValid

  return (
    <div className="login-container">
      <Logo text={"Log in to Clone"} />
      <form className="auth-form">
        <Input
          field="email"
          label="Email"
          type= 'text'
          value={formState.email.value}
          onChangHandler={handleInputValueChang}
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.email.showError}
          validationMessage={emailValidationMessage  }
        />
        <Input
          field="password"
          label="Password"
          type='password'
          value={formState.password.value}
          onChangHandler={handleInputValueChang}
          showErrorMessage={formState.password.showError}
          onBlurHandler={handleInputValidationOnBlur}
          validationMessage={passwordValidationMessage}
        />

        <button
        onClick={handleLogin}
        disabled = {isSubmitButtonDisabled}
        >Log in</button>
      </form>
      <span onClick={switchAuthHandle} className="auth-form-switch-label">
        Don't have an account ? Sign up
      </span>
    </div>
  );
};
