import { StyledList, StyledListItem, StyledDoneButton, StyledDeleteButton, StyledTask } from "./styled";
import { selectTasks, toogleHideDone } from "../../tasksSlice";
import { useDispatch, useSelector } from "react-redux";

const TaskList = ({deleteTask, toogleTaskDone}) => {

    const {tasks, hideDone} = useSelector(selectTasks);

    const dispatch = useDispatch(toogleHideDone);

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
                            onClick={() => deleteTask(id)}
                            className={`material-icons`}>
                            delete
                        </StyledDeleteButton>
                    </StyledListItem>
                ))}
            </StyledList>
    );

}

export {TaskList};