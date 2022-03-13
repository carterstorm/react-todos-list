import "./style.css";

const Buttons = ({tasks, hideButtons}) => {
    if(tasks.lenght === 0) {
        return null;
    }

    return (
        <div className="buttons">
            <button 
                className="button">{`${hideButtons ? "Show " : "Hide "}`} 
            done
            </button>
            <button 
                disabled={`${tasks.every(({done}) => done) ? "disabled" : ""}`}
                className="button">Complete all tasks</button>
        </div>
    );
};

export {Buttons};