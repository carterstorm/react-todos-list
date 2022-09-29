import { useDispatch, useSelector } from "react-redux";
import { toogleTasksDone, setAllTasksDone, selectHideDone, selectIsEveryTasksDone, selectAreTasksEmpty, axiosGetExampleTasks } from "../../tasksSlice";
import { StyledButtons } from "../Buttons/styled";
import Button from "../../../common/Button";

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
                        onClick={() => dispatch(toogleTasksDone())}>
                        {`${hideDone ? "Show " : "Hide "}`} done
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