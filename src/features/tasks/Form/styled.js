import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr 200px;
    gap: 20px;

    @media (max-width: ${({ theme }) => theme.screen.mobile}px) {
        grid-template-columns: 1fr;
    }
`;

export const StyledFormInput = styled.input`
    height: 30px;
    padding: 0 15px;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.silver};

    &::placeholder {
        color: ${({ theme }) => theme.colors.silver};
        font-weight: 200;
    }
`;