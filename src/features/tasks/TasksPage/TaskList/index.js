import { useDispatch, useSelector } from "react-redux";
import { StyledList, StyledListItem, StyledDoneButton, StyledDeleteButton, StyledTask } from "./styled";
import { toggleHideDone, deleteTask, selectHideDone, selectTasksByQuery } from "../../../tasksSlice";
import { StyledLink } from "./styled";
import { useQueryParameter } from "../queryParameters";
import { queryParamName } from "../queryParamName";
import { toTask } from "../../../../routes";

const TaskList = () => {

    const query = useQueryParameter(queryParamName);

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
                        onClick={() => dispatch(toggleHideDone(id))}
                        className={`material-icons`}>
                        {done ? "done" : ""}
                    </StyledDoneButton>
                    <StyledTask
                        done={done}>
                        <StyledLink to={toTask({ id: id })}>{content}</StyledLink>
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