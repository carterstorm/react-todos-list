import React, {useState} from "react";
import { Form } from "./Form";
import { Buttons } from "./Buttons";
import { List } from "./List";
import { Section } from "./Section";
import { Container } from "./Container";

function App() {

  const [tasks, setTasks] = useState([
    {id: 1, content: "Example 1", done: true},
    {id: 2, content: "Example 2", done: false},
  ]);
  
  const [hideDone, setHideDone] = useState(false);

  const toogleHideDone = () => {
    setHideDone(hideDone => !hideDone)
  };

  const setAllTaskDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true,
    })))
  }

  const deleteTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id))}

  return (
    <Container>
      <h1>To-do list</h1>
      <Section
        title = {`Add a new task`}
        body = {<Form/>}
      />
      <Section
        title = {`What you need to do:`}
        header={<Buttons 
                  tasks={tasks} 
                  hideDone={hideDone} 
                  toogleHideDone={toogleHideDone} 
                  setAllTaskDone={setAllTaskDone}/>}
        body = {<List tasks={tasks} hideDone={hideDone} deleteTask={deleteTask}/>}
      />
    </Container>
  );
}

export default App;