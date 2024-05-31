import React, { useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('date');

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false, date: new Date() },
    ]);
  };

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true;
  });

  const sortedTodos = [...filteredTodos].sort((a, b) => {
    if (sort === 'date') return new Date(b.date) - new Date(a.date);
    if (sort === 'alphabetical') return a.task.localeCompare(b.task);
    return 0;
  });

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />
      <div className="filters">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('incomplete')}>Incomplete</button>
        <button onClick={() => setSort('date')}>Sort by Date</button>
        <button onClick={() => setSort('alphabetical')}>Sort by Alphabetical</button>
      </div>
      {sortedTodos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
};


// original
// import React, { useState } from "react";
// import { Todo } from "./Todo";
// import { TodoForm } from "./TodoForm";
// import { v4 as uuidv4 } from "uuid";
// import { EditTodoForm } from "./EditTodoForm";

// export const TodoWrapper = () => {
//   const [todos, setTodos] = useState([]);

//   const addTodo = (todo) => {
//     setTodos([
//       ...todos,
//       { id: uuidv4(), task: todo, completed: false, isEditing: false },
//     ]);
//   }

//   const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

//   const toggleComplete = (id) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   }

//   const editTodo = (id) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
//       )
//     );
//   }

//   const editTask = (task, id) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
//       )
//     );
//   };

//   return (
//     <div className="TodoWrapper">
//       <h1>Get Things Done !</h1>
//       <TodoForm addTodo={addTodo} />
//       {/* display todos */}
//       {todos.map((todo) =>
//         todo.isEditing ? (
//           <EditTodoForm editTodo={editTask} task={todo} />
//         ) : (
//           <Todo
//             key={todo.id}
//             task={todo}
//             deleteTodo={deleteTodo}
//             editTodo={editTodo}
//             toggleComplete={toggleComplete}
//           />
//         )
//       )}
//     </div>
//   );
// };