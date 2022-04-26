import {useState, useEffect} from "react";

export const useLocalStorageTask = () => {
    const getInitialTasks = () => {
      const tasksFromLocalStorage = localStorage.getItem("tasks");

      return tasksFromLocalStorage ? JSON.parse(tasksFromLocalStorage) : [];
    };

    const [tasks, setTasks] = useState(getInitialTasks);

    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks]);

    return [tasks, setTasks];
};