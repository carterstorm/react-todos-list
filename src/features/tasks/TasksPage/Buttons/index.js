import { useDispatch, useSelector } from "react-redux";
import { toggleTasksDone, setAllTasksDone, selectHideDone, selectIsEveryTasksDone, selectAreTasksEmpty } from "../../../tasksSlice";
import { StyledButtons } from "../Buttons/styled";
import Button from "../../../../common/Button";

const Buttons = () => {

    const areTasksEmpty = useSelector(selectAreTasksEmpty)
    const hideDone = useSelector(selectHideDone);
    const isEveryTasksDone = useSelector(selectIsEveryTasksDone);

    const dispatch = useDispatch();

    return (
        <StyledButtons>
            {!areTasksEmpty && (
                <>
                    <Button
                        disabled={isEveryTasksDone}
                        onClick={() => dispatch(toggleTasksDone())}>
                        {`${hideDone ? "Show" : "Hide"}`} done
                    </Button>
                    <Button
                        onClick={() => dispatch(setAllTasksDone())}
                        disabled={isEveryTasksDone}>
                        Complete all tasks
                    </Button>
                </>
            )}
        </StyledButtons>
    );
};

export { Buttons };