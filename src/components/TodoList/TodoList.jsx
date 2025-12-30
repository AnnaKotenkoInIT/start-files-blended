import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({ todos, deleteTodo, handleEditTodo, isEditing }) => {
  return (
    <Grid>
      {todos.map((todo, index) => (
        <GridItem key={todo.id}>
          <TodoListItem
            text={todo.text}
            count={index + 1}
            deleteTodo={deleteTodo}
            id={todo.id}
            handleEditTodo={handleEditTodo}
            isEditing={isEditing}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TodoList;
