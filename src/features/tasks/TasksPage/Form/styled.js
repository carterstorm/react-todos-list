import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr 200px;
    gap: 20px;

    @media (max-width: ${({ theme }) => theme.screen.mobile}px) {
        grid-template-columns: 1fr;
    }
`;