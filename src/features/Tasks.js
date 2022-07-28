import React from "react";
import { Form } from "./tasks/Form";
import { Buttons } from "./tasks/Buttons";
import { TaskList } from "./tasks/TaskList";
import { Section } from "../common/Section";
import { Container } from "../common/Container";

function Tasks() {

  return (
      <Container>
        <h1>To-do list</h1>
        <Section
          title = {`Add a new task`}
          body = {<Form/>}
        />
        <Section
          title = {`What you need to do:`}
          header={<Buttons/>}
          body = {<TaskList/>}
        />
      </Container>
  );
}

export default Tasks;