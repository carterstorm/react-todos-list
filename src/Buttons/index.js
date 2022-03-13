import "./style.css";

const Buttons = ({tasks, hideDone}) => {
    
    if(tasks.lenght === 0) {
        return null;
    }

    return (
        <div className="buttons">
            <button 
                onClick={() => console.log("Siema")}
                className="button">{`${hideDone ? "Show " : "Hide "}`} 
            done
            </button>
            <button 
                disabled={`${tasks.every(({done}) => done) ? "disabled" : ""}`}
                className="button">Complete all tasks</button>
        </div>
    );
};

export {Buttons};