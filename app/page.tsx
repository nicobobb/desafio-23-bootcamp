"use client";
import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

interface Task {
    id: number;
    text: string;
}

const Home: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (text: string) => {
        const newTask: Task = {
            id: Date.now(),
            text: text,
        };
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (taskId: number) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
    };

    return (
        <div className="text-center bg-white rounded-md max-w-xl mx-auto my-8 py-8">
            <h1 className="text-orange-300 font-semibold text-2xl">
                Lista de Tareas
            </h1>
            <TaskForm addTask={addTask} />
            <TaskList tasks={tasks} deleteTask={deleteTask} />
        </div>
    );
};

export default Home;
