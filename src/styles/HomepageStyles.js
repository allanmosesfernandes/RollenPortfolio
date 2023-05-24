import styled from "styled-components";

export const HomePageStyled = styled.section`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 2rem;

h2 {
    font-family: ${(props) => props.theme.secondaryFont};
    font-size: ${(props) => props.theme.fsMedium};
    letter-spacing: 1px;
    display: flex;
    align-items: center;

    &:before {
        content: "";
        width: 30px;
        height: 2px;
        margin-right: 10px;
        background-color: ${(props) => props.theme.purpleShade};
    }
    img {
        width: 50px;
        height: 50px;
        margin-left: 10px;
    }

    p {
        
    }
}
`