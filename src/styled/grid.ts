import styled from "styled-components";



export const Layout = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "main";
  grid-gap: 2em;
`;

export const SubLayout = styled.div`
  display: grid;
  grid-template-areas:
    "header header header"
    "right main main";
  grid-gap: 2em;
`

export const HeaderArea = styled.div`
  grid-area: header;
`

export const MainArea = styled.div`
  grid-area: main;
`
export const RightArea = styled.div`
  grid-area: right;
`