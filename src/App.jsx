import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import AddTask from "./Components/AddTask";
import Tasks from "./Components/Tasks";
import Header from './Components/Header'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar Programação",
      completed: false,
    },
    {
      id: "2",
      title: "Ler livros",
      completed: true,
    },
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return {...task, completed: !task.completed}
      return task;
    })

    setTasks(newTasks)
  }

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];

    setTasks(newTasks);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)
  }

  return (
    <>
      <div className="container">
        <Header/>
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion}/>
      </div>
    </>
  );
};

export default App;

// State: cria um estado
// Sempre que for atualizado o state é alterado
