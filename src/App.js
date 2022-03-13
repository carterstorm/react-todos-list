import { Form } from "./Form";
import { Buttons } from "./Buttons";
import { List } from "./List";
import { Section } from "./Section";
import { Container } from "./Container";

function App() {

  let tasks = [
    {
      id: 1, content: "Example 1", done: true,
    },
    {
      id: 2, content: "Example 2", done: false
    },
  ];
  
  let hideButtons = false;

  return (
    <Container>
      <h1>To-do list</h1>
      <Section
        title = {`Add a new task`}
        body = {<Form/>}
      />
      <Section
        title = {`What you need to do:`}
        header={<Buttons tasks={tasks} hideButtons={hideButtons}/>}
        body = {<List tasks={tasks} hideButtons={hideButtons}/>}
      />
    </Container>
  );
}

export default App;