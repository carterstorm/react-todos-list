import { useDispatch, useSelector } from "react-redux";
import { toogleTasksDone, setAllTasksDone, selectHideDone, selectIsEveryTasksDone, selectTasksEmpty } from "../../tasksSlice";
import { StyledButtons, StyledButton} from "../Buttons/styled";

const Buttons = () => {

    const hideDone = useSelector(selectHideDone);
    const isEveryTasksDone = useSelector(selectIsEveryTasksDone);

    const dispatch = useDispatch(toogleTasksDone);
    const dispatch2 = useDispatch(setAllTasksDone);

    if(selectTasksEmpty === 0) {
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
                disabled={`${isEveryTasksDone ? "disabled" : ""}`}
            >
                Complete all tasks
            </StyledButton>
        </StyledButtons>
    );
};

export {Buttons};