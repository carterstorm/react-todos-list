import { Form } from "./Form";
import { Buttons } from "./Buttons";

function App() {

  let tasks = [];
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
            <Buttons tasks={tasks} hideTaskButtons={hideButtons}/>
        </div>
        <div className="section__body">
          <ul className="list">
          </ul>
        </div>
      </section>
    </main>
    );
}

export default App;
