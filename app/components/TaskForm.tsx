"use client";
import { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

interface TaskProps {
    addTask: (taskText: string) => void;
}

interface FormSubmitEvent {
    preventDefault: () => void;
}

const TaskForm: React.FC<TaskProps> = ({ addTask }) => {
    const [taskText, setTaskText] = useState("");

    const handleSubmit = (e: FormSubmitEvent) => {
        e.preventDefault();
        if (!taskText.trim()) return;
        addTask(taskText);
        setTaskText("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Ingrese una nueva tarea"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
            />
            <button>
                <IoMdAddCircleOutline color="green" size={28} type="submit" />
            </button>
        </form>
    );
};

export default TaskForm;
