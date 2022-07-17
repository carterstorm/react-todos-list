import React, {useState} from "react";
import { Form } from "./features/tasks/Form";
import { Buttons } from "../src/features/tasks/Buttons";
import { List } from "./features/tasks/List";
import { Section } from "../src/common/Section";
import { Container } from "../src/common/Container";
import { useTasks } from "./useTasks";

function App() {

  const {
    tasks,
    setAllTaskDone,
    deleteTask,
    toogleTaskDone,
    addNewTask,
  } = useTasks();
  
  const [hideDone, setHideDone] = useState(false);

  const toogleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  return (
      <Container>
        <h1>To-do list</h1>
        <Section
          title = {`Add a new task`}
          body = {<Form addNewTask={addNewTask}/>}
        />
        <Section
          title = {`What you need to do:`}
          header={<Buttons 
                    tasks={tasks} 
                    hideDone={hideDone} 
                    toogleHideDone={toogleHideDone} 
                    setAllTaskDone={setAllTaskDone}/>}
          body = {<List tasks={tasks} hideDone={hideDone} deleteTask={deleteTask} toogleTaskDone={toogleTaskDone}/>}
        />
      </Container>
  );
}

export default App;