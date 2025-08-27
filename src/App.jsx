import Header from "./Components/Header";
import TodoList from "./Components/TodoList";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    // if we didn't write anything , then it will return and not add an empty todo

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: newTodo.trim(),
        completed: false,
      },
    ]);
    // here we take the current todos and add a new todo object to it and the end of the array
    // after that we reset the newTodo state to an empty string
    setNewTodo("");
  };

  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    if (window.confirm("are you sure you want to delete this task?")) {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  const editTodo = (id, newText) => {
    if (!newText.trim()) return;
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText.trim() } : todo
      )
    );
    // if the newText is empty, we return and do not update the todo
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main
        className="mx-auto px-4 py-8 max-w-2xl"
        style={{ height: "90vh", display: "flex", flexDirection: "column" }}
      >
        <form onSubmit={addTodo} className="flex gap-2">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new todo..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:border-blue-500 "
          />
          <button
            type="submit"
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-blue-700 transition-colors delay-100"
          >
            Add Todo
          </button>
        </form>

        <div style={{ flex: 1, overflowY: "auto", marginTop: "1rem" }}>
          <TodoList
            todos={todos}
            onComplete={completeTodo}
            onDelete={deleteTodo}
            onEdit={editTodo}
          />
        </div>
      </main>
    </div>
  );
}
export default App;
