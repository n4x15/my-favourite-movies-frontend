import styled from "styled-components";

export const Title = styled.h1`
margin: 5px;
font-size: x-large;
`

export const ContentWrapperBlock = styled.div`
display: flex;
justify-content: start;

`
export const FavoriteMovieCard = styled.div<{isBlockView?: boolean, isWatched?:boolean}>`
border: solid 1px;
border-radius: 50px 20px;
padding: 10px;
margin: 10px;
display:grid;
${props=>props.isBlockView
    ? "grid-template-rows: 0.1fr 0.9fr 0.3fr 0.1fr;" 
    : "grid-template-columns: 0.2fr 0.4fr 1.5fr 0.1fr;"
};
${props=>props.isWatched
  ? "opacity:0.5"
  : "opacity:1"}
`