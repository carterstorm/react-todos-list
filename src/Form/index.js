import React, {useState} from "react";
import "./style.css";

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
        <form className="form" onSubmit={onFormSubmit}>
            <input 
                value={newTaskContent}
                onChange={({target})=> setNewTaskContent(target.value)}
                className="form__input" 
                type="text" 
                placeholder="Type here what are you gonna do?"/>
            <button className="button">Add task</button>
        </form>
    )
};

export {Form};