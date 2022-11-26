const TodoItem = ({ item, index, deleteTodoItem, completeTodoItem, 
updateTodoItem }) => {
return (
<div className="todo-list">
<li style={{textDecoration: item.complete ? "line-through" : ""}}>
{item.todo}</li>
<div className="btns">
<button onClick={() => completeTodoItem(index)}>Complete</button>
<button onClick={() => updateTodoItem(index)}>Update</button>
<button onClick={() => deleteTodoItem(index)}>X</button>
</div>
</div>)
};

export default TodoItem