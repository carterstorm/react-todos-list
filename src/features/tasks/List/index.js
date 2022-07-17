import { StyledList, StyledListItem, StyledDoneButton, StyledDeleteButton, StyledTask } from "./styled";

const List = ({tasks, hideDone, deleteTask, toogleTaskDone}) => (
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

export {List};