import styled from "styled-components"

export const MovieCard = styled.div<{isBlockView?: boolean}>`
border: solid 1px;
border-radius: 50px 20px;
padding: 10px;
margin: 10px;
display:grid;
${props=>props.isBlockView
    ? "grid-template-rows: 0.2fr 1.5fr 1fr 0.1fr;" 
    : "grid-template-columns: 0.2fr 0.4fr 1.5fr 0.1fr;"
};
`
export const MoviesWrapper = styled.div<{isBlockView?: boolean}>`
${props=>props.isBlockView
    ? "display:grid; grid-template-columns:repeat(4, 1fr);" 
    : "display:block;"}
`

export const SaveButton = styled.button<{disabled?: boolean}>`
border: solid 1px;
border-radius: 50px 20px;
padding: 2px;
margin-bottom: 5px;
opacity: ${props => props.disabled? "0.5" : "1" }
`