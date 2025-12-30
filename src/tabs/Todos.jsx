import { useEffect, useState } from 'react';
import Form from '../components/Form/Form';
import Text from '../components/Text/Text';
import TodoList from '../components/TodoList/TodoList';
import { nanoid } from 'nanoid';
import EditForm from '../components/EditForm/EditForm';

const Todos = () => {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) || []
  );

  // розписана функція
  // const Todos = () => {
  // const [todos, setTodos] = useState(() => {
  //   const savedTodos = localStorage.getItem('todos');
  //   return savedTodos ? JSON.parse(savedTodos) : [];
  // });

  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addNewTodo = text => {
    if (findTodo(text)) {
      alert(`Todo ${text} already exists!`);
      return;
    }

    console.log({ text, id: nanoid() });
    setTodos([...todos, { text, id: nanoid() }]);
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEditTodo = editTodo => {
    setCurrentTodo(editTodo);
    setIsEditing(true);
  };

  const cancelUpdate = () => {
    setCurrentTodo({});
    setIsEditing(false);
  };

  const updateTodo = text => {
    if (findTodo(text)) {
      alert(`Todo ${text} already exists!`);
      return;
    }

    setTodos(
      todos.map(todo =>
        todo.id === currentTodo.id ? { ...currentTodo, text } : todo
      )
    );
    cancelUpdate();
  };

  const findTodo = text => {
    return todos.find(todo => todo.text.toLowerCase() === text.toLowerCase());
  };

  return (
    <>
      {isEditing ? (
        <EditForm
          defaultValue={currentTodo.text}
          cancelUpdate={cancelUpdate}
          updateTodo={updateTodo}
        />
      ) : (
        <Form onSubmit={addNewTodo} />
      )}
      {todos.length ? (
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          handleEditTodo={handleEditTodo}
          isEditing={isEditing}
        />
      ) : (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};

export default Todos;
