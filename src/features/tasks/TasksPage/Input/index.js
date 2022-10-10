import styled from "styled-components";

export const Input = styled.input`
    height: 30px;
    min-width: 130px;
    padding: 0 15px;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.silver};

    &::placeholder {
        color: ${({ theme }) => theme.colors.silver};
        font-weight: 200;
    }
`;