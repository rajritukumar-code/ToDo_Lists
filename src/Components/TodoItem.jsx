import { useState } from "react";

const TodoItem = ({ todo, onComplete, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      onEdit(todo.id, editedText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex items-center justify-between p-4 mb-2 bg-white rounded-lg shadow">
      <div className="flex items-center gap-3 flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onComplete(todo.id)}
          className="w-5 h-5 cursor-pointer accent-yellow-600"
        />
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="flex-1 p-1 border rounded"
            autoFocus
          />
        ) : (
          <span
            className={`flex-1 ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {todo.text}
          </span>
          // use to specify if the task is completed or not
        )}
      </div>
      <div className="flex gap-2">
        <button
          onClick={handleEdit}
          className="px-3 py-1 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="px-3 py-1 text-sm text-white bg-red-600 rounded hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
