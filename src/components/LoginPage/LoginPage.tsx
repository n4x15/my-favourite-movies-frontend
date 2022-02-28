import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./assets/logo.svg";
import "./assets/LoginPage.css";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import { Form } from "react-final-form";
import { LoginForm, FormWrapper, Label, ErrLabel } from "./assets/LoginPageStyledComponents";
import { FORM_ERROR } from "final-form";
import LoginField from "./components/LoginField";
import LoginHeader from "./components/LoginHeader";
import {checkPassword} from "../../Utils"

const LoginPage = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

 const onSubmit = (input: any) => {
    if (checkPassword(input) === true){
      navigate("/MainPage")
    }else{
      return {[FORM_ERROR]: t("auth.incorrectUser")};
    }
  }

  return (  
 <FormWrapper>
 <LoginHeader/>
      <Form
        onSubmit={onSubmit}
        validate={(values) => {
          const errors: any = {};
          if (!values.login) {
            errors.login = "auth.emptyField";
          }
          if (!values.password) {
            errors.password = "auth.emptyField";
          }
          return errors;
        }}
        render={({ submitError, handleSubmit }) => (
          <LoginForm onSubmit={handleSubmit}>
            <img src={logo} alt="logo" className="w-100"/>
            <Label>{t("auth.login")}</Label>
            <LoginField name="login" isPassword={false} label="auth.login"/>
            <Label>{t("auth.password")}</Label>
            <LoginField name="password" isPassword={true} label="auth.password"/> 
            {submitError && <ErrLabel> {submitError}</ErrLabel>}
            <Button variant="contained" type="submit">
              {t("auth.enter")}
            </Button>
          </LoginForm>
        )}
      />
 </FormWrapper>
  );
};

export default LoginPage;