import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { StyledList, StyledListItem, StyledDoneButton, StyledDeleteButton, StyledTask } from "./styled";
import { toogleHideDone, deleteTask, selectHideDone, selectTasksByQuery } from "../../../tasksSlice";
import { StyledLink } from "./styled";

const TaskList = () => {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("search");

    const tasks = useSelector(state => selectTasksByQuery(state, query));
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