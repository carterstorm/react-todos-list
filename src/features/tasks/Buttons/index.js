import { StyledButtons, StyledButton} from "../Buttons/styled";

const Buttons = ({tasks, hideDone, toogleHideDone, setAllTaskDone}) => {
    
    if(tasks.lenght === 0) {
        return null;
    }

    return (
        <StyledButtons>
            <StyledButton
                onClick={toogleHideDone}
            >
                {`${hideDone ? "Show " : "Hide "}`} done
            </StyledButton>
            <StyledButton
                onClick={setAllTaskDone}
                disabled={`${tasks.every(({done}) => done) ? "disabled" : ""}`}
            >
                Complete all tasks
            </StyledButton>
        </StyledButtons>
    );
};

export {Buttons};