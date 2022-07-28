import { StyledList, StyledListItem, StyledDoneButton, StyledDeleteButton, StyledTask } from "./styled";
import { toogleHideDone, deleteTask, selectTasks, selectHideDone } from "../../tasksSlice";
import { useDispatch, useSelector } from "react-redux";

const TaskList = () => {

    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch(toogleHideDone);
    const dispatch2 = useDispatch(deleteTask);

    return (
            <StyledList>
                {tasks.map(({id, content, done})=> (
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
                                {content}
                        </StyledTask>
                        <StyledDeleteButton
                            remove
                            onClick={() => dispatch2(deleteTask(id))}
                            className={`material-icons`}>
                            delete
                        </StyledDeleteButton>
                    </StyledListItem>
                ))}
            </StyledList>
    );

}

export {TaskList};