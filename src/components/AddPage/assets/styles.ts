import styled from "styled-components";

export const SaveButton = styled.button<{disabled: boolean}>`
border: solid 1px;
border-radius: 50px 20px;
padding: 2px;
margin-bottom: 0.5rem;
opacity: ${props => props.disabled? "0.5" : "1" }
`
export const FiltersWrapper = styled.div`
display: flex;
width: 80%;
margin-left: 10%;
flex-direction: column;
border: 1px solid;
border-radius: 50px 20px;
justify-content: start;
`
export const SelectorsWrapper = styled.div`
flex-direction: row;
margin-left: 25%;
margin-right: 25%;
width: 50%;
padding: 2%;
`
export const YearSelect = styled.select`
box-shadow: 0 1px 0 1px rgba(0,0,0,.04); 
border-radius: 50px 20px;
padding: 0.5rem ;
`
export const MoviePresentBlock = styled.div`
border: solid 1px;
border-radius: 50px 20px;
margin: 0.5rem;
padding: 0.5rem;
display:grid;
grid-template-rows: 0.2fr 1.8fr 1fr 0.1fr; 
`
export const MoviePresentList = styled.div`
border: solid 1px;
border-radius: 50px 20px;
margin: 0.5rem;
padding: 0.5rem;
display:grid;
grid-template-columns: 0.2fr 0.4fr 1.5fr 0.1fr; 
`