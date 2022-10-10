import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { StyledForm } from "./styled";
import { Input } from "../Input";
import Button from "../../../../common/Button";
import { addTask } from "../../../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {

    const [newTaskContent, setNewTaskContent] = useState("");

    const dispatch = useDispatch();

    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (!newTaskContent.trim()) {
            focusInput();
            return;
        }
        dispatch(addTask({
            content: newTaskContent,
            done: false,
            id: nanoid(),
        }));

        setNewTaskContent("");
        focusInput();
    }

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                ref={inputRef}
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                type="text"
                placeholder="Type here what are you gonna do?" />
            <Button>
                Add task
            </Button>
        </StyledForm>
    )
};

export { Form };