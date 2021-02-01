import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "clean house",
      day: "feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "clean room",
      day: "feb 5th at 2:30pm",
      reminder: false,
    },
    {
      id: 3,
      text: "clean garage",
      day: "feb 5th at 2:30pm",
      reminder: false,
    },
  ]);
  //add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  //reminder toggle
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <Header />
      <AddTask addtask={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} ondelete={deleteTask} ontoggle={toggleReminder} />
      ) : (
        "no tasks to show"
      )}
    </div>
  );
}

export default App;
