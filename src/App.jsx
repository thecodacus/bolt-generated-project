import React, { useState } from 'react';

    function TodoApp() {
      const [todos, setTodos] = useState([]);
      const [input, setInput] = useState('');

      const handleAddTodo = () => {
        setTodos([...todos, input]);
        setInput('');
      };

      return (
        <div className="p-10">
          <h1 className="text-2xl font-bold mb-5">Todo App</h1>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border p-2 mb-5"
          />
          <button
            onClick={handleAddTodo}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Todo
          </button>
          <ul>
            {todos.map((todo, index) => (
              <li key={index} className="text-xl mt-3">
                {todo}
              </li>
            ))}
          </ul>
        </div>
      );
    }

    export default TodoApp;
