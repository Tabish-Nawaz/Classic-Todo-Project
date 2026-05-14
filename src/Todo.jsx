import { useState } from "react";

function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  function handleAdd() {
    if (inputValue.trim() === "") return;
    const todo = [...todos, inputValue];
    setTodos(todo);
    setInputValue("");
  }

  const HandleEdit = (index) => {
    setInputValue(todos[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const HandleUpdate = () => {
    const updatedTodos = todos.map((item, i) =>
      i === editIndex ? inputValue : item,
    );

    setTodos(updatedTodos);
    setInputValue("");
    setIsEditing(false);
    setEditIndex(null);
  };

  const HandleDelete = (index) => {
    const Delete = todos.filter((_, i) => i !== index);
    setTodos(Delete);
  };

  return (
    <div className="h-screen flex items-center justify-center flex-col bg-slate-900">
      <h1 className="font-bold text-4xl font-arial p-3 m-2 text-white">
        Classic Todo Project
      </h1>

      <div className="h-auto w-100 flex ">
        <input
          className="bg-slate-700 p-3 w-[99%] rounded text-white"
          type="text"
          placeholder="Add Todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {isEditing ? (
          <button
            className="ml-4 rounded p-3 bg-green-600 cursor-pointer text-white font-bold"
            onClick={HandleUpdate}
          >
            Update
          </button>
        ) : (
          <button
            className="ml-4 rounded p-3 bg-blue-950 cursor-pointer text-white font-bold"
            onClick={handleAdd}
          >
            Add
          </button>
        )}
      </div>

      <ul>
        {todos.map((todo, index) => (
          <div className="rounded w-90 p-2 h-auto bg-slate-400 my-4 flex items-center flex-wrap overflow-auto justify-between">
            <li key={index}>{todo}</li>
            <div className="flex items-center gap-2">
              <button
                onClick={() => HandleEdit(index)}
                className="bg-amber-100 p-1 rounded px-2 text-black cursor-pointer"
              >
                Edit
              </button>
              <button
                onClick={() => HandleDelete(index)}
                className="bg-red-500 p-1 rounded px-2 text-black cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Todo;




// import { useState } from "react";

// function Todo() {
//   const [inputValue, setInputValue] = useState("");
//   const [todos, setTodos] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);

//   function handleAdd() {
//     if (inputValue.trim() === "") return;
//     const todo = [...todos, inputValue];
//     setTodos(todo);
//     setInputValue("");
//   }

//   const HandleEdit = (index) => {
//     setInputValue(todos[index]);
//     setIsEditing(true);
//     setEditIndex(index);
//   };

//   const HandleUpdate = () => {
//     const updatedTodos = todos.map((item, i) =>
//       i === editIndex ? inputValue : item,
//     );

//     setTodos(updatedTodos);
//     setInputValue("");
//     setIsEditing(false);
//     setEditIndex(null);
//   };

//   const HandleDelete = (index) => {
//     const Delete = todos.filter((_, i) => i !== index);
//     setTodos(Delete);
//   };

//   return (
//     <div className="h-screen flex items-center justify-center flex-col bg-slate-900">
//       <h1 className="font-bold text-3xl font-mono p-3 m-2 text-white">
//         Classic Todo Project
//       </h1>

//       <div className="h-auto w-100 flex ">
//         <input
//           className="bg-slate-700 p-3 w-[99%] rounded text-white"
//           type="text"
//           placeholder="Add Todo"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//         />
//         {isEditing ? (
//           <button
//             className="ml-4 rounded p-3 bg-green-600 cursor-pointer text-white font-bold"
//             onClick={HandleUpdate}
//           >
//             Update
//           </button>
//         ) : (
//           <button
//             className="ml-4 rounded p-3 bg-blue-950 cursor-pointer text-white font-bold"
//             onClick={handleAdd}
//           >
//             Add
//           </button>
//         )}
//       </div>

//       <ul>
//         {todos.map((todo, index) => (
//           <div className="rounded w-90 p-2 h-auto bg-slate-400 my-4 flex items-center flex-wrap overflow-auto justify-between">
//             <li key={index}>{todo}</li>
//             <div className="flex items-center gap-2">
//               <button
//                 onClick={() => HandleEdit(index)}
//                 className="bg-amber-100 p-1 rounded px-2 text-black cursor-pointer"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => HandleDelete(index)}
//                 className="bg-red-500 p-1 rounded px-2 text-black cursor-pointer"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Todo;
