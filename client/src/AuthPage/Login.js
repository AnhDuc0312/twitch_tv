import React, { useState } from "react";
import { Logo } from "./Logo";
import { AuthInput } from "./AuthInput";

export const Login = ({ switchAuthHandle }) => {
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

  console.log(formState);

  return (
    <div className="login-container">
      <Logo text={"Log in to Clone"} />
      <form className="auth-form">
        <AuthInput
          field="email"
          label="Email"
          value={formState.email.value}
          onChangHandler={handleInputValueChang}
        />
        <AuthInput
          field="password"
          label="Password"
          value={formState.password.value}
          onChangHandler={handleInputValueChang}
        />

        <button>Log in</button>
      </form>
      <span onClick={switchAuthHandle} className="auth-form-switch-label">
        Don't have an account ? Sign up
      </span>
    </div>
  );
};
