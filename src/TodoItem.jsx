const TodoItem = ({
    item,
    deleteTodoItem,
    completeTodoItem,
    updateTodoItem
}) => {
    return (
        <div className="todo-list">
            <li style={{textDecoration: item.complete ? "line-through" : ""}}>
                {item.todo}
            </li>
            <div className="btns">
                <button onClick={() => completeTodoItem(item.id)}>
                    {item.complete ? 'Mark as incompleted' : 'Mark as completed'}
                </button>
                <button onClick={() => updateTodoItem(item.id)}>Update</button>
                <button onClick={() => deleteTodoItem(item.id)}>X</button>
            </div>
        </div>
    )
};

export default TodoItem