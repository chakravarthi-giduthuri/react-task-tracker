import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const fromTasks = await fetchtasks();
      setTasks(fromTasks);
    };
    getTasks();
  }, []);

  //fetch data
  const fetchtasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  //fetch task
  const fetchtask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  //add task
  // const addTask = (task) => {
  //   const id = Math.floor(Math.random() * 10000) + 1;
  //   const newTask = { id, ...task };
  //   setTasks([...tasks, newTask]);
  // };

  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();

    setTasks([...tasks, data]);
  };

  //delete task

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };
  //reminder toggle

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchtask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });
    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <Header
        onadd={() => setShowAddTask(!showAddTask)}
        showadd={showAddTask}
      />
      {showAddTask && <AddTask addtask={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} ondelete={deleteTask} ontoggle={toggleReminder} />
      ) : (
        "no tasks to show"
      )}
    </div>
  );
}

export default App;
