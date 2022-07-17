import React, {useRef, useState} from "react";
import { StyledForm, StyledFormInput } from "./styled";
import { StyledButton } from "../Buttons/styled";

const Form = ({addNewTask}) => {
    
    const [newTaskContent, setNewTaskContent] = useState("");
    
    const focusRef = useRef(null);

    const focusInput = () => {
        focusRef.current.focus();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        if(newTaskContent.trim()) {
            addNewTask(newTaskContent);
            setNewTaskContent("");
            focusInput();
        } 
        return null;
    }

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <StyledFormInput
                ref={focusRef}
                value={newTaskContent}
                onChange={({target})=> setNewTaskContent(target.value)}             
                type="text"
                placeholder="Type here what are you gonna do?"/>
            <StyledButton>
                    Add task
            </StyledButton>
        </StyledForm>
    )
};

export {Form};