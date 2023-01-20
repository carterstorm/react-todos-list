export const toTasks = () => "/tasks";
export const toAuthor = () => "/author";

export const toTask = ({ id } = { id: ":id" }) => `/tasks/${id}`;