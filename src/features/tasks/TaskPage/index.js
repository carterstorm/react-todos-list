import React from "react";
import { Section } from "../../../common/Section";
import { Container } from "../../../common/Container";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../../tasksSlice";

export const TaskPage = () => {

    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <Container>
            <h1>To-do list</h1>
            <Section
                title={task.content}
                body={<>nana</>}
            />
        </Container>
    );
};