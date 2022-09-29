import styled from "styled-components";

export default styled.button`
    border: none;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.teal};
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    transition: .2s;
    height: 30px;
    min-width: 110px;
    font-size: 16px;

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }

    &:disabled, &:disabled:hover {
        background-color: ${({ theme }) => theme.colors.silver};
        cursor: auto;
    }
`;