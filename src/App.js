import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

function App(props) {
  const taskList = props.tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
    />
  ));

  return (
    <div className="todoapp stack-large">
      <h1>Done That</h1>
      <Form />
      <div className="filters btn-group stack-exception">
        <FilterButton name="Active" pressed={false} id="activeFilter"/>
        <FilterButton name="All" pressed={true} id="allFilter"/>
        <FilterButton name="Completed" pressed={false} id="completedFilter" />
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
