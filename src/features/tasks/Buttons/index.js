import { useDispatch, useSelector } from "react-redux";
import { selectTasks, toogleTaskDone as toogleTasksDone } from "../../tasksSlice";
import { StyledButtons, StyledButton} from "../Buttons/styled";

const Buttons = ({setAllTaskDone}) => {
    
    const {tasks, hideDone} = useSelector(selectTasks);
    const dispatch = useDispatch(toogleTasksDone);

    if(tasks.lenght === 0) {
        return null;
    }

    return (
        <StyledButtons>
            <StyledButton
                onClick={() => dispatch(toogleTasksDone())}
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