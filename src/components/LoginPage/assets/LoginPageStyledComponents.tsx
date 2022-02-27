import styled from "styled-components";

export const LoginForm = styled.form`
  background-color: rgb(200, 200, 200, 0.1);
  box-shadow: 5px 5px 5px gray;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 2.5rem;
  padding-bottom: 2rem;
  margin-bottom: 1rem;
`;
export const FormWrapper = styled.div`
  width: 100%;
`;
export const Label = styled.p`
  margin: 0.5rem;
  font-size: large;
  text-align: center;
`;
export const ErrLabel = styled(Label)`
  color: red;
  font-style: bold;
`;
