import { StyledList, StyledListItem, StyledDoneButton, StyledDeleteButton, StyledTask } from "./styled";
import { toogleHideDone, deleteTask, selectTasks, selectHideDone } from "../../../tasksSlice";
import { useDispatch, useSelector } from "react-redux";
import { StyledLink } from "./styled";

const TaskList = () => {

    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <StyledList>
            {tasks.map(({ id, content, done }) => (
                <StyledListItem
                    key={id}
                    hidden={done && hideDone}
                >
                    <StyledDoneButton
                        done
                        onClick={() => dispatch(toogleHideDone(id))}
                        className={`material-icons`}>
                        {done ? "done" : ""}
                    </StyledDoneButton>
                    <StyledTask
                        done={done}>
                        <StyledLink to={`/tasks/${id}`}>{content}</StyledLink>
                    </StyledTask>
                    <StyledDeleteButton
                        remove
                        onClick={() => dispatch(deleteTask(id))}
                        className={`material-icons`}>
                        delete
                    </StyledDeleteButton>
                </StyledListItem>
            ))}
        </StyledList>
    );

}

export { TaskList };