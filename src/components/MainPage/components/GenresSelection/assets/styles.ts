import styled from "styled-components";
import {Button} from "../../../assets/MainPageStyledComponents"

export const GenreCard = styled(Button)<{ isChecked: boolean }>`
  width: 25%;
  background: ${(props) => (props.isChecked ? "#aefd6c" : "white")};
`;
export const GenresWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: auto;
  justify-content: center;
`;
