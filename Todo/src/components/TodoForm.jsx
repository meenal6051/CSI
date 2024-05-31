import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

export const TodoForm = ({ addTodo, handleFilterSortChange }) => {
  const [value, setValue] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addTodo(value.trim());
      setValue('');
    } else {
      alert("Task cannot be empty");
    }
  };

  const handleDropdownChange = (value) => {
    handleFilterSortChange(value);
    setShowDropdown(false); // Close the dropdown after selecting an option
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <div className="input-container">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="todo-input"
          placeholder='What is the task today?'
        />
        <div className="dropdown-container">
          <FontAwesomeIcon
            icon={faCaretDown}
            className="dropdown-icon"
            onClick={() => setShowDropdown(!showDropdown)}
          />
          {showDropdown && (
            <div className="dropdown-menu">
              <button type="button" onClick={() => handleDropdownChange('all')}>All</button>
              <button type="button" onClick={() => handleDropdownChange('completed')}>Completed</button>
              <button type="button" onClick={() => handleDropdownChange('incomplete')}>Incomplete</button>
              <button type="button" onClick={() => handleDropdownChange('date')}>Sort by Date</button>
              <button type="button" onClick={() => handleDropdownChange('alphabetical')}>Sort by Alphabetical</button>
            </div>
          )}
        </div>
      </div>
      <button type="submit" className='todo-btn'>Add Task</button>
    </form>
  );
};



// Original
// import React, {useState} from 'react';

// export const TodoForm = ({addTodo}) => {
//     const [value, setValue] = useState('');
//     const [error, setError] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (value.trim()) {
//             addTodo(value);
//             setValue('');
//             setError('');
//         } else {
//             setError('Task cannot be empty.');
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit} className="TodoForm">
//             <input 
//                 type="text" 
//                 value={value} 
//                 onChange={(e) => setValue(e.target.value)} 
//                 className="todo-input" 
//                 placeholder='What is the task today?' 
//             />
//             <button type="submit" className='todo-btn'>Add Task</button>
//             {error && <p className="error">{error}</p>}
//         </form>
//     );
// };