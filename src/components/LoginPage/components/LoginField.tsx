import { Field } from "react-final-form";
import TextField from "@mui/material/TextField";
import { useTranslation } from "react-i18next";
import { ErrLabel } from "../assets/LoginPageStyledComponents";

const LoginField = (props: { name: string }) => {
  const { t, i18n } = useTranslation();
  return (
    <Field name={props.name}>
      {({ input, meta }) => (
        <div>
          <TextField
            variant="outlined"
            {...input}
            type={props.name === "password" ? "password" : "text"}
            placeholder={
              props.name === "password" ? t("auth.password") : t("auth.login")
            }
          />
          {(meta.error || meta.submitError) && meta.touched && (
            <ErrLabel>{t(meta.error) || meta.submitError}</ErrLabel>
          )}
        </div>
      )}
    </Field>
  );
};

export default LoginField;
