import styled from "styled-components";

export default styled.button`
    border: none;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.teal};
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    transition: .2s;
    height: 30px;
    min-width: 130px;
    font-size: 16px;

    &:hover {
        filter: brightness(110%);
    }

    &:disabled {
        background-color: ${({ theme }) => theme.colors.silver};
        cursor: auto;
    }
`;