import styled from "styled-components";

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
export const MovieWrapperBlock = styled.div`
  display: grid;
  margin-left: 2rem;
  margin-right: 2rem;
  grid-template-columns: repeat(4, 1fr);
`;
export const MovieWrapperList = styled.div`
  display: block;
`;
export const MoviePresentList = styled.div<{ isWatched: boolean }>`
  display: flex;
  margin: 10px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 50px 20px;
  box-shadow: 0 0 2px;
  width: 100%;
  opacity: ${(props) => (props.isWatched ? "0.5" : "1")};
`;
export const MoviePresentBlock = styled.div<{ isWatched: boolean }>`
  display: flex;
  margin: 10px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 50px 20px;
  box-shadow: 0 0 2px;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  text-align: justify;
  opacity: ${(props) => (props.isWatched ? "0.5" : "1")};
`;

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
