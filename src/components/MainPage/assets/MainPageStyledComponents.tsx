import styled from "styled-components";

export const MainPageWrapper = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;
export const LogOutWrapper = styled.div`
  display: flex;
  justify-content: end;
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 1rem;
  gap: 1rem;
`;

export const Button = styled.button`
  border: solid 1px;
  border-radius: 50px 20px;
  box-shadow: 0 0 2px;
  padding-left: 5px;
  padding-right: 5px;
  width: auto;
  margin: 5px;
  &:hover {
    background-color: #aefd6c;
  }
`;

export const AddButton = styled(Button)`
  padding: 10px;
`;

export const MainPageHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const LogOutButton = styled.button`
  margin-left: 10px;
  text-decoration: underline;
`;
