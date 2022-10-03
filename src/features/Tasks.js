import React from "react";
import { Form } from "./tasks/Form";
import { Buttons } from "./tasks/Buttons";
import { TaskList } from "./tasks/TaskList";
import { Section } from "../common/Section";
import { Container } from "../common/Container";
import Button from "../common/Button";
import { fetchGetExampleTasks } from "./tasksSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectAreTasksLoading } from "./tasksSlice";

function Tasks() {

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
}

export default Tasks;