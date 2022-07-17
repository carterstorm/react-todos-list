import React, {useRef, useState} from "react";
import { useDispatch } from "react-redux";
import { StyledForm, StyledFormInput } from "./styled";
import { StyledButton } from "../Buttons/styled";
import { addTask } from "../../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
    
    const [newTaskContent, setNewTaskContent] = useState("");

    const dispatch = useDispatch();
    
    const focusRef = useRef(null);

    const focusInput = () => {
        focusRef.current.focus();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        
        if(newTaskContent.trim()) {
            dispatch(addTask({
                content: newTaskContent,
                done: false,
                id: nanoid(),
            }))
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