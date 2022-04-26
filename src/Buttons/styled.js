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
    background-color: teal;
    color: #fff;
    cursor: pointer;
    transition: .2s;
    height: 30px;
    min-width: 110px;

    &:hover {
        background-color: rgb(1, 161, 161);
    }

    &:active {
        background-color: rgb(4, 204, 204);
    }

    &:disabled, &:disabled:hover {
        background-color: #ccc;
        cursor:auto;
    }
`;