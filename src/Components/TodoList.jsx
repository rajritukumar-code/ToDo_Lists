import TodoItem from "./TodoItem";
const TodoList = ({todos, onComplete, onDelete, onEdit}) => {
  return (
    <div className="mt-4">
      {todos.length === 0 ? (
        <p className="text-center text-gray-500">
            Add one above!
        </p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onComplete={onComplete}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      )}
    </div>
  );
};
export default TodoList;
