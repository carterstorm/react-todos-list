import React, {useState} from "react";
import { useSelector } from "react-redux";
import { Form } from "./tasks/Form";
import { Buttons } from "./tasks/Buttons";
import { List } from "./tasks/TaskList";
import { Section } from "../common/Section";
import { Container } from "../common/Container";
import { useTasks } from "../useTasks";
import { selectTasks } from "./tasksSlice";

function Tasks() {

const {tasks} = useSelector(selectTasks);

  const {
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

export default Tasks;