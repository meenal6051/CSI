import React, { useState, useEffect } from 'react';
import { TodoForm } from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';

export const TodoWrapperLocalStorage = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('date');

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
  }, []);

  const addTodo = (todo) => {
    const newTodos = [
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false, date: new Date() },
    ];
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const toggleComplete = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const editTodo = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
    ));
  };

  const editTask = (task, id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
    );
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const handleFilterSortChange = (value) => {
    if (value === 'all' || value === 'completed' || value === 'incomplete') {
      setFilter(value);
    } else {
      setSort(value);
    }
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
    <div className='TodoWrapper'>
      <h1>Get Things Done!</h1>
      <TodoForm addTodo={addTodo} handleFilterSortChange={handleFilterSortChange} />
      {sortedTodos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};




// import React, { useState, useEffect } from 'react';
// import { TodoForm } from './TodoForm';
// import { v4 as uuidv4 } from 'uuid';
// import { Todo } from './Todo';
// import { EditTodoForm } from './EditTodoForm';

// export const TodoWrapperLocalStorage = () => {
//     const [todos, setTodos] = useState([]);
//     const [filter, setFilter] = useState('all');

//     useEffect(() => {
//         const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
//         setTodos(savedTodos);
//     }, []);

//     const addTodo = (todo) => {
//         const newTodos = [...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }];
//         setTodos(newTodos);
//         localStorage.setItem('todos', JSON.stringify(newTodos));
//     };

//     const toggleComplete = (id) => {
//         const newTodos = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
//         setTodos(newTodos);
//         localStorage.setItem('todos', JSON.stringify(newTodos));
//     };

//     const deleteTodo = (id) => {
//         const newTodos = todos.filter(todo => todo.id !== id);
//         setTodos(newTodos);
//         localStorage.setItem('todos', JSON.stringify(newTodos));
//     };

//     const editTodo = (id) => {
//         setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo));
//     };

//     const editTask = (task, id) => {
//         const newTodos = todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo);
//         setTodos(newTodos);
//         localStorage.setItem('todos', JSON.stringify(newTodos));
//     };

//     const filteredTodos = todos.filter(todo => {
//         if (filter === 'completed') {
//             return todo.completed;
//         } else if (filter === 'incomplete') {
//             return !todo.completed;
//         } else {
//             return true;
//         }
//     });

//     const sortedTodos = filteredTodos.sort((a, b) => b.completed - a.completed);

//     return (
//         <div className='TodoWrapper'>
//             <h1>Get Things Done!</h1>
//             <TodoForm addTodo={addTodo} />
//             <div className="filters">
//                 <button onClick={() => setFilter('all')}>All</button>
//                 <button onClick={() => setFilter('completed')}>Completed</button>
//                 <button onClick={() => setFilter('incomplete')}>Incomplete</button>
//             </div>
//             {sortedTodos.map((todo) => (
//                 todo.isEditing ? (
//                     <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
//                 ) : (
//                     <Todo task={todo} key={todo.id} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
//                 )
//             ))}
//         </div>
//     );
// };