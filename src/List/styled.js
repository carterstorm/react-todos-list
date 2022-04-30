import styled, { css } from "styled-components";

export const StyledList = styled.ul`
    list-style: none;
    padding: 0;
`;

export const StyledListItem = styled.li`
    display: grid;
    align-items: center;
    grid-template-columns: 35px 1fr 35px;
    gap: 20px;
    padding: 10px;
    border-bottom: 1px solid ${({theme}) => theme.colors.gallery};

    ${({hidden}) => hidden && css`
        display: none;
    `};
`;

export const StyledDoneButton = styled.button`
    border: none;
    border-radius: 5px;
    color: ${({theme}) => theme.colors.white};
    height: 35px;
    cursor: pointer;
    transition: .2s;
    

    ${({done}) => done && css`

        background-color: ${({theme}) => theme.colors.harlequine_green};

        &:hover {
            background-color: ${({theme}) => theme.colors.harlequine_greenLight};
        };

        &:active {
            background-color: ${({theme}) => theme.colors.screaming_green};
        }
    `};
`;

export const StyledDeleteButton = styled(StyledDoneButton)`

        ${({remove}) => remove && css`
            background-color: ${({theme}) => theme.colors.carnation};

            &:hover {
                background-color: ${({theme}) => theme.colors.burnt_sienna};
            }

            &:active {
                background-color: ${({theme}) => theme.colors.apricot};
            }
        `}
`;

export const StyledTask = styled.p`
    margin: 0;

    ${({done}) => done && css`
        text-decoration: line-through;
        color: ${({theme}) => theme.colors.burnt_sienna};
    `}
`;