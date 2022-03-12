import "./style.css";

const List = ({tasks, hideButtons}) => (
    <ul className="list">
        {tasks.map(({id, content, done})=> (
            <li key={id}
                className={`list__item ${done && hideButtons ? "list__item--hidden" : ""}`}>
                <button 
                    className={`list__button list__button--done material-icons`}>
                    {done ? "done" : ""}
                </button>
                <p 
                    className={`list__task ${done ? "list__task--done" : ""}`}>{content}
                </p>
                <button 
                    className={`list__button list__button--remove material-icons`}>
                    delete
                </button>
            </li>
        ))}
    </ul>
);

export {List};