import React, { useState } from "react";
import { Logo } from "./Logo";
import { Input } from "../shared/components";
import {
  emailValidationMessage,
  passwordConfValidationMessage,
  passwordValidationMessage,
  usernameValidationMessage,
  validateEmail,
  validatePassword,
  validatePasswordConf,
  validateUsername,
} from "../shared/validators";
import { useRegister } from "../shared/hooks";

export const Register = ({ switchAuthHandle }) => {
    const {isLoading, register} = useRegister()
  const [formState, setFormState] = useState({
    email: {
      value: "",
      isValid: false,
      showError: false,
    },
    username: {
      value: "",
      isValid: false,
      showError: false,
    },
    password: {
      value: "",
      isValid: false,
      showError: false,
    },
    passwordConf: {
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
      case "email":
        isValid = validateEmail(value);
        break;
      case "password":
        isValid = validatePassword(value);
        break;
      case "username":
        isValid = validateUsername(value);
        break;
      case "passwordConf":
        isValid = validatePasswordConf(formState.password.value,value);
        break;
      default:
        break;
    }

    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        isValid,
        showError: !isValid,
      },
    }));
  };

//   console.log(formState);
    const handleRegister = (event) => {
        event.preventDefault();

        register(formState.email.value,formState.password.value,formState.username.value);
    }

    const isSubmitButtonDisabled = isLoading ||!formState.password.isValid || 
    !formState.email.isValid ||
    !formState.username.isValid || 
    formState.passwordConf.value !== formState.password.value

  return (
    <div className="register-container">
      <Logo text={"Sign up to Clone"} />
      <form className="auth-form">
        <Input
          field="email"
          label="Email"
          type="text"
          value={formState.email.value}
          onChangHandler={handleInputValueChang}
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.email.showError}
          validationMessage={emailValidationMessage}
        />
        <Input
          field="username"
          label="Username"
          type="text"
          value={formState.username.value}
          onChangHandler={handleInputValueChang}
          showErrorMessage={formState.username.showError}
          onBlurHandler={handleInputValidationOnBlur}
          validationMessage={usernameValidationMessage}
        />
        <Input
          field="password"
          label="Password"
          type="password"
          value={formState.password.value}
          onChangHandler={handleInputValueChang}
          showErrorMessage={formState.password.showError}
          onBlurHandler={handleInputValidationOnBlur}
          validationMessage={passwordValidationMessage}
        />
        <Input
          field="passwordConf"
          label="Password retype"
          type="password"
          value={formState.passwordConf.value}
          onChangHandler={handleInputValueChang}
          showErrorMessage={formState.passwordConf.showError}
          onBlurHandler={handleInputValidationOnBlur}
          validationMessage={passwordConfValidationMessage}
        />

        <button
          onClick={handleRegister}
          disabled={isSubmitButtonDisabled}
        >
          Register
        </button>
      </form>
      <span onClick={switchAuthHandle} className="auth-form-switch-label">
        Do you already have an account ? Log in
      </span>
    </div>
  );
};
