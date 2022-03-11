function App() {
  return (
    <main className="container">
      <h1>To-do list</h1>
      <section className="section">
        <h2 className="section__header">Add a new task</h2>
        <div className="section__body">
          <form className="form">
            <input className="form__input" type="text" placeholder="Type here what are you gonna do?"/>
            <button className="button">Add task</button>
          </form>
        </div>
      </section>
      <section className="section">
        <div className="section__container">
          <h2 className="section__header section__header--offborder">What you need to do:</h2>
            <div className="section__buttons"></div>
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
