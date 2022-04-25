import React, {useState} from "react";
import { StyledForm, StyledFormInput } from "../Form/styled";

const Form = ({addNewTask}) => {
    
    const [newTaskContent, setNewTaskContent] = useState("");
    
    const onFormSubmit = (event) => {
        event.preventDefault();
        if(newTaskContent.trim()) {
            addNewTask(newTaskContent);
            setNewTaskContent("");
        } 
        return null;
    }

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <StyledFormInput
                value={newTaskContent}
                onChange={({target})=> setNewTaskContent(target.value)}
                type="text" 
                placeholder="Type here what are you gonna do?"/>
            <button className="button">Add task</button>
        </StyledForm>
    )
};

export {Form};