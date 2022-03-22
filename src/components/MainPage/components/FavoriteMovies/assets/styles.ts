import styled from "styled-components";

export const Title = styled.h1`
margin: 5px;
font-size: x-large;
`
export const Overview = styled.span`
margin: 10px;
`
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
export const ContentWrapperList = styled.div`
display: flex;
width: 10%;
`
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

export const ContentWrapperBlock = styled.div`
display: flex;
justify-content: start;
`