import { useDispatch, useSelector } from "react-redux";
import { selectTasks, toogleTaskDone } from "../../tasksSlice";
import { StyledButtons, StyledButton} from "../Buttons/styled";

const Buttons = ({setAllTaskDone}) => {
    
    const {tasks, hideDone} = useSelector(selectTasks);
    const dispatch = useDispatch(toogleTaskDone);

    if(tasks.lenght === 0) {
        return null;
    }

    return (
        <StyledButtons>
            <StyledButton
                onClick={() => dispatch(toogleTaskDone())}
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