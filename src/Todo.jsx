import { useState } from "react";

function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  function handleAdd() {
    if (inputValue.trim() === "") return;
    setTodos([...todos, inputValue]);
    setInputValue("");
  }

  const HandleEdit = (index) => {
    setInputValue(todos[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const HandleUpdate = () => {
    const updatedTodos = todos.map((item, i) =>
      i === editIndex ? inputValue : item
    );

    setTodos(updatedTodos);
    setInputValue("");
    setIsEditing(false);
    setEditIndex(null);
  };

  const HandleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4 py-10">
      <div className="w-full max-w-xl">
        <h1 className="font-bold text-2xl sm:text-4xl text-center text-white mb-6">
          Classic Todo Project
        </h1>

        {/* Input Section */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            className="bg-slate-700 p-3 w-full rounded text-white outline-none"
            type="text"
            placeholder="Add Todo"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          {isEditing ? (
            <button
              className="bg-green-600 text-white font-bold px-4 py-3 rounded w-full sm:w-auto"
              onClick={HandleUpdate}
            >
              Update
            </button>
          ) : (
            <button
              className="bg-blue-700 text-white font-bold px-4 py-3 rounded w-full sm:w-auto"
              onClick={handleAdd}
            >
              Add
            </button>
          )}
        </div>

        {/* Todo List */}
        <ul className="space-y-3">
          {todos.map((todo, index) => (
            <div
              key={index}
              className="w-full bg-slate-400 p-3 rounded flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <li className="break-words">{todo}</li>

              <div className="flex gap-2">
                <button
                  onClick={() => HandleEdit(index)}
                  className="bg-amber-100 px-3 py-1 rounded text-black"
                >
                  Edit
                </button>
                <button
                  onClick={() => HandleDelete(index)}
                  className="bg-red-500 px-3 py-1 rounded text-black"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
