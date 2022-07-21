import { StyledList, StyledListItem, StyledDoneButton, StyledDeleteButton, StyledTask } from "./styled";
import { selectTasks } from "../../tasksSlice";
import { useSelector } from "react-redux";

const TaskList = ({deleteTask, toogleTaskDone}) => {

    const {tasks, hideDone} = useSelector(selectTasks);

    return (
            <StyledList>
                {tasks.map(({id, content, done})=> (
                    <StyledListItem 
                        key={id}
                        hidden={done && hideDone}
                    >
                        <StyledDoneButton
                            done
                            onClick={() => toogleTaskDone(id)}
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