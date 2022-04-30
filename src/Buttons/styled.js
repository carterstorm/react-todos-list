import styled from "styled-components";

export const StyledButtons = styled.div`
    padding: 25px;
    display: grid;
    grid-template-columns: auto auto;
    gap: 10px;

    @media (max-width: ${({theme}) => theme.screen.mobile}px) {
        grid-template-columns: 1fr;
        padding: 15px 25px;
}
`;

export const StyledButton = styled.button`
    border: none;
    border-radius: 5px;
    background-color: ${({theme}) => theme.colors.teal};
    color: ${({theme}) => theme.colors.white};
    cursor: pointer;
    transition: .2s;
    height: 30px;
    min-width: 110px;

    &:hover {
        background-color: ${({theme}) => theme.colors.persian_green};
    }

    &:active {
        background-color: ${({theme}) => theme.colors.robin_green};
    }

    &:disabled, &:disabled:hover {
        background-color: ${({theme}) => theme.colors.silver};
        cursor:auto;
    }
`;