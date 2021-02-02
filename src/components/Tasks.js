import Task from "./Task";

function Tasks({ tasks, ondelete, ontoggle }) {
  return (
    <>
      {tasks.map((task, index) => (
        <Task key={index} task={task} ondelete={ondelete} ontoggle={ontoggle} />
      ))}
    </>
  );
}
export default Tasks;
