import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr 200px;
    gap: 20px;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

export const StyledFormInput = styled.input`
    height: 30px;
    padding: 0 15px;
    border-radius: 5px;
    border: 1px solid #aaa;

    &::placeholder {
        color: #ccc;
        font-weight: 200;
    }
`;