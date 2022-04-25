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
    border-bottom: 1px solid #eee;

    ${({hidden}) => hidden && css`
        display: none;
    `};
`;

export const StyledDoneButton = styled.button`
    border: none;
    border-radius: 5px;
    color: white;
    height: 35px;
    cursor: pointer;
    transition: .2s;
    

    ${({done}) => done && css`

        background-color: rgb(32, 189, 1);

        &:hover {
            background-color: rgb(45, 209, 2);
        };

        &:active {
            background-color: rgb(105, 248, 69);
        }
    `};
`;

export const StyledDeleteButton = styled(StyledDoneButton)`

        ${({remove}) => remove && css`
            background-color: rgb(240, 82, 82);

            &:hover {
                background-color: rgb(240, 102, 102);
            }

            &:active {
                background-color: rgb(236, 127, 127);
            }
        `}
`;

export const StyledTask = styled.p`
    margin: 0;

    ${({done}) => done && css`
        text-decoration: line-through;
        color: red;
    `}
`;