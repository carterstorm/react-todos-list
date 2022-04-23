import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: #fff;
    margin-bottom: 5px;
    box-shadow: 7px 22px 58px -49px rgba(66, 68, 90, 1);
`;

export const StyledSectionContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 2px solid #eee;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

export const StyledSectionHeading = styled.h2`
    padding: 25px;
    margin: 0;
    border-bottom: none;

    @media (max-width: 600px) {
        padding: 15px 25px;
}
`;

export const StyledSectionBody = styled.div`
    padding: 25px;
`;