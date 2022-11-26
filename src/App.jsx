import "./App.css";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import {
    useState
} from 'react';

function App() {
    const [todoItems, setTodoItems] = useState([])

    const createTodoItem = (todo) => {
        const id = (new Date()).getTime()
        const newTodoItems = [...todoItems, {
            todo,
            complete: false,
            id
        }];
        setTodoItems(newTodoItems);
    };

    const deleteTodoItem = (id) => {
        const newTodoItems = todoItems.filter(item => item.id !== id)
        setTodoItems(newTodoItems)
    }

    const completeTodoItem = (id) => {
        const newTodoItems = todoItems.map(item => item.id === id ? {
            ...item,
            complete: !item.complete
        } : item);

        setTodoItems(newTodoItems)
    };

    const updateTodoItem = (id) => {
        const todo = todoItems.find(item => item.id === id)
        const newValue = prompt(`Update ${todo.todo}?`, todo.todo);
        
        if (!newValue) {
            return
        }

        const newTodoItems = todoItems.map(item => item.id === id ? {
            ...item,
            todo: newValue
        } : item)

        setTodoItems(newTodoItems);
    };

    return (
        <div className="app">
        <TodoInput createTodoItem={createTodoItem} />
        {todoItems.map((item) => (
            <TodoItem
                key={item.id}
                item={item}
                deleteTodoItem={deleteTodoItem}
                completeTodoItem={completeTodoItem}
                updateTodoItem={updateTodoItem}
            />
        ))}
    </div>
    );
}
export default App;