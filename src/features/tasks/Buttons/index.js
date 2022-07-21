import { useDispatch, useSelector } from "react-redux";
import { selectTasks, toogleTasksDone, setAllTasksDone } from "../../tasksSlice";
import { StyledButtons, StyledButton} from "../Buttons/styled";

const Buttons = () => {
    
    const {tasks, hideDone} = useSelector(selectTasks);
    const dispatch = useDispatch(toogleTasksDone);
    const dispatch2 = useDispatch(setAllTasksDone);

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
                onClick={() => dispatch2(setAllTasksDone())}
                disabled={`${tasks.every(({done}) => done) ? "disabled" : ""}`}
            >
                Complete all tasks
            </StyledButton>
        </StyledButtons>
    );
};

export {Buttons};