import { IoIosClose } from "react-icons/io";

interface TaskListProps {
    tasks: { id: number; text: string }[];
    deleteTask: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, deleteTask }) => {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    {task.text}
                    <button onClick={() => deleteTask(task.id)}>
                        <IoIosClose color="red" size={28} />
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
