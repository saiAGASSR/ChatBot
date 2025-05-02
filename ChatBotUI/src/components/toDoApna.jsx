"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ToDoApna = () => {
    const redClassBtn =
        "bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded";

    const [toDos, setToDos] = useState([{ task: "Sample", uuid: uuidv4(), done: false }]);
    const [toDoinput, setTodoinput] = useState("");

    // Handle input change
    const handleInputValue = (event) => {
        setTodoinput(event.target.value);
    };

    // Add new task
    const handleAddToDO = () => {
        if (toDoinput.trim() === "") return;
        setToDos((prevValues) => [
            ...prevValues,
            { task: toDoinput.trim(), uuid: uuidv4(), done: false },
        ]);
        setTodoinput("");
    };

    // Delete task
    const handleDeleteTask = (id) => {
        setToDos((prevValues) => prevValues.filter((el) => el.uuid !== id));
    };

    // Convert all tasks to uppercase
    const handleUppercase = () => {
        setToDos((prevValues) =>
            prevValues.map((el) => ({ ...el, task: el.task.toUpperCase() }))
        );
    };

    // Toggle task status (Done/Undone)
    const handleStatusDone = (id) => {
        setToDos((prevValues) =>
            prevValues.map((el) => 
                el.uuid === id ? { ...el, done: !el.done } : el
            )
        );
    };

    return (
        <div className="p-4">
            <div>
                <input
                    type="text"
                    value={toDoinput}
                    onChange={handleInputValue}
                    placeholder="Enter a task..."
                    className="border p-2 rounded w-64"
                />
                <button 
                    onClick={handleAddToDO} 
                    className="ml-2 bg-blue-500 text-white px-4 py-2 rounded">
                    Add
                </button>
            </div>

            <ul className="mt-4">
                <strong>Your ToDo List:</strong>
                {toDos.length > 0 ? (
                    toDos.map((el) => (
                        <li 
                            key={el.uuid} 
                            className={`mt-2 ${el.done ? "line-through text-gray-500" : ""}`}
                        >
                            {el.task} &nbsp;&nbsp;
                            <button className={redClassBtn} onClick={() => handleDeleteTask(el.uuid)}>
                                Delete
                            </button>

                            <button
                                onClick={() => handleStatusDone(el.uuid)}
                                className="ml-2 bg-green-500 text-white px-4 py-2 rounded"
                            >
                                {el.done ? "Undo" : "Done"}
                            </button>
                        </li>
                    ))
                ) : (
                    <li className="text-gray-500">No tasks available</li>
                )}
            </ul>

            <button 
                onClick={handleUppercase} 
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
                Uppercase All
            </button>
        </div>
    );
};

export default ToDoApna;
