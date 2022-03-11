import "./style.css";

const Form = () => (
    <form className="form">
        <input className="form__input" type="text" placeholder="Type here what are you gonna do?"/>
        <button className="button">Add task</button>
    </form>
);

export {Form};