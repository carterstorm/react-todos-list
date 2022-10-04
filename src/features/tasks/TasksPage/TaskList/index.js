import { StyledList, StyledListItem, StyledDoneButton, StyledDeleteButton, StyledTask } from "./styled";
import { toogleHideDone, deleteTask, selectTasks, selectHideDone } from "../../../tasksSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
                        <Link to={`/tasks/${id}`}>{content}</Link>
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