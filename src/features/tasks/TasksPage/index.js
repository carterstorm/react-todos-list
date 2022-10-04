import React from "react";
import { Form } from "./Form";
import { Buttons } from "./Buttons";
import { TaskList } from "./TaskList";
import { Section } from "../../../common/Section";
import { Container } from "../../../common/Container";
import Button from "../../../common/Button";
import { useDispatch, useSelector } from "react-redux";
import { selectAreTasksLoading, fetchGetExampleTasks } from "../../tasksSlice";

export const TasksPage = () => {

  const dispatch = useDispatch();
  const areTasksLoading = useSelector(selectAreTasksLoading);

  return (
    <Container>
      <h1>To-do list</h1>
      <Section
        title={`Add a new task`}
        body={<Form />}
        exampleTaskButton={
          <Button
            disabled={areTasksLoading}
            onClick={() => dispatch(fetchGetExampleTasks())}>
            {areTasksLoading ? "Loading..." : "Get example tasks"}
          </Button>}
      />
      <Section
        title={`What you need to do:`}
        header={<Buttons />}
        body={<TaskList />}
      />
    </Container>
  );
};