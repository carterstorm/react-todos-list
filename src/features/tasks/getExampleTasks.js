import axios from "axios";

export const getExampleTasks = async () => {
    try {
        const response = await axios.get("react-todos-list/exampleTasks.json");
        console.log(response.data)
    } catch (error) {
        console.error("Error!", error);
    };
};