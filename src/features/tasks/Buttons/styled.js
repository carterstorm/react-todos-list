import styled from "styled-components";

export const StyledButtons = styled.div`
    padding: 25px;
    display: grid;
    grid-template-columns: auto auto;
    gap: 10px;

    @media (max-width: ${({ theme }) => theme.screen.mobile}px) {
        grid-template-columns: 1fr;
        padding: 15px 25px;
}
`;