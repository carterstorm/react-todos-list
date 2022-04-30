import {useState, useEffect} from "react";

const getInitialTasks = () => {
  const tasksFromLocalStorage = localStorage.getItem("tasks");

  return tasksFromLocalStorage ? JSON.parse(tasksFromLocalStorage) : [];
};

export const useTasks = () => {

    const [tasks, setTasks] = useState(getInitialTasks);

    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks]);
  
    const setAllTaskDone = () => {
      setTasks(tasks => tasks.map(task => ({
        ...task,
        done: true,
      })))
    };
  
    const deleteTask = (id) => {
      setTasks(tasks => tasks.filter(task => task.id !== id))
    };
  
    const toogleTaskDone = (id) => {
      setTasks(tasks => tasks.map(task => {
        if(task.id === id) {
          return (
            {...task, done: !task.done}
          )
        } return task;
      }))
    };
  
    const addNewTask = (newTaskContent) => {
      setTasks(tasks => [
        ...tasks,
        {
          id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
          content: newTaskContent,
          done: false,
        },
      ]);
    };

    return {
      tasks,
      setAllTaskDone,
      deleteTask,
      toogleTaskDone,
      addNewTask,
    }
};