import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./assets/logo.svg";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import { Form } from "react-final-form";
import {
  LoginForm,
  FormWrapper,
  Label,
  ErrLabel,
  ButtonWrapper,
} from "./assets/LoginPageStyledComponents";
import { FORM_ERROR } from "final-form";
import LoginField from "./components/LoginField";
import { useMutation } from "@apollo/client";
import { LOG_IN } from "src/graphql/mutation/graphql.mutation";

const LoginPage = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [auth] = useMutation(LOG_IN, {
    onCompleted: (data) =>
      localStorage.setItem("userToken", data.logIn.accessToken),
    onError: (error) => error,
  });

  const onSubmit = async (input: { login: string; password: string }) => {
    const authentication = await auth({
      variables: { login: input.login, password: input.password },
    });
    return !authentication.errors
      ? (navigate("/main-page"),
        localStorage.setItem("currentUser", input.login))
      : { [FORM_ERROR]: t("auth.incorrectUser") };
  };

  return (
    <FormWrapper>
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
            <img src={logo} alt='logo' className='w-100' />
            <Label>{t("auth.login")}</Label>
            <LoginField name='login' label='auth.login' />
            <Label>{t("auth.password")}</Label>
            <LoginField
              name='password'
              isPassword={true}
              label='auth.password'
            />
            {submitError && <ErrLabel> {submitError}</ErrLabel>}
            <ButtonWrapper>
              <Button variant='contained' type='submit'>
                {t("auth.enter")}
              </Button>
            </ButtonWrapper>
          </LoginForm>
        )}
      />
    </FormWrapper>
  );
};

export default LoginPage;
