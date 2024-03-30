/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);

  useEffect(() => { 
    let todostring = localStorage.getItem("todos");
    if (todostring) {
          let todos = JSON.parse(localStorage.getItem("todos"));
          settodos(todos);
    }

  }, []);
  
  const savetoLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  // const handleEdit=() => {

  // }
  const handleAdd = () => {
    settodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    settodo("");
    savetoLS();
  };
  const handleChange = (e) => {
    settodo(e.target.value);
  };
  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    settodos(newTodos);
    savetoLS();
  };
  const handleDelete = (e) => {
    let id = e.target.name;
    let newTodos = [];
    todos.map((todo) => {
      if (todo.id !== id) {
        newTodos.push(todo);
      }
    });
    settodos(newTodos);
    savetoLS();
  };
  const handleEdit = (e,id) => {
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    settodo(todos[index].todo);
    let newTodos = [];
    todos.map((todo) => {
      if (todo.id !== id) {
        newTodos.push(todo);
      }
    });
    settodos(newTodos);
    savetoLS();
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-200 min-h-[80vh]">
        <div className="addTodo my-5">
          <h2 className="text-lg font-bold">Add a todo </h2>
          <input
            value={todo}
            onChange={handleChange}
            type="text"
            className="w-1/2"
          />
          <button
            onClick={handleAdd}
            className="bg-violet-700 hover:bg-violet-800 p-2 py-3 text-sm font-bold text-white rounded-md mx-6"
          >
            Add
          </button>
        </div>
        <h1 className="text-xl font-bold">Your Todos</h1>
        <div className="todos">
          {todos.map((item) => {
            return (
              <div key={item.id} className="todo flex w-1/3 justify-between">
                <input
                  name={item.id}
                  value={item.isCompleted}
                  onChange={handleCheckbox}
                  type="checkbox"
                  className=""
                />
                <div
                  className={item.isCompleted ? "line-through my-3" : "my-3"}
                >
                  {item.todo}
                </div>
                <div className="buttons">
                  <button
                    onClick={(e) => handleEdit(e, item.id)}
                    className="bg-violet-700 hover:bg-violet-800 p-2 py-3 text-sm font-bold text-white rounded-md mx-1"
                  >
                    Edit
                  </button>
                  <button
                    name={item.id}
                    onClick={handleDelete}
                    className="bg-violet-700 hover:bg-violet-800 p-2 py-3 text-sm font-bold text-white rounded-md mx-1"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
