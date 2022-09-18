import { useDispatch, useSelector } from "react-redux";
import { toogleTasksDone, setAllTasksDone, selectHideDone, selectIsEveryTasksDone, selectAreTasksEmpty } from "../../tasksSlice";
import { StyledButtons, StyledButton } from "../Buttons/styled";

const Buttons = () => {

    const areTasksEmpty = useSelector(selectAreTasksEmpty)
    const hideDone = useSelector(selectHideDone);
    const isEveryTasksDone = useSelector(selectIsEveryTasksDone);

    const dispatch = useDispatch();

    return (
        <StyledButtons>
            {!areTasksEmpty && (
                <>
                    <StyledButton
                        onClick={() => dispatch(toogleTasksDone())}>
                        {`${hideDone ? "Show " : "Hide "}`} done
                    </StyledButton>
                    <StyledButton
                        onClick={() => dispatch(setAllTasksDone())}
                        disabled={isEveryTasksDone}>
                        Complete all tasks
                    </StyledButton>
                </>
            )}
        </StyledButtons>
    );
};

export { Buttons };