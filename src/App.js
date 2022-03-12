import { Form } from "./Form";
import { Buttons } from "./Buttons";
import { List } from "./List";

function App() {

  let tasks = [
    {
      id: 1, content: "Example 1", done: false,
    },
    {
      id: 2, content: "Example 2", done: false
    },
  ];
  let hideButtons = false;

  return (
    <main className="container">
      <h1>To-do list</h1>
      <section className="section">
        <h2 className="section__header">Add a new task</h2>
        <div className="section__body">
          <Form/>
        </div>
      </section>
      <section className="section">
        <div className="section__container">
          <h2 className="section__header section__header--offborder">What you need to do:</h2>
            <Buttons tasks={tasks} hideButtons={hideButtons}/>
        </div>
        <div className="section__body">
          <List tasks={tasks} hideButtons={hideButtons}/>
        </div>
      </section>
    </main>
    );
}

export default App;
