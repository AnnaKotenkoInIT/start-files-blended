import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import style from './TodoListItem.module.css';
import Text from '../Text/Text';

const TodoListItem = ({
  text,
  id,
  count,
  deleteTodo,
  handleEditTodo,
  isEditing,
}) => {
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{count}
      </Text>
      <Text>{text}</Text>
      <button
        onClick={() => deleteTodo(id)}
        className={style.deleteButton}
        type="button"
        disabled={isEditing}
      >
        <RiDeleteBinLine size={24} />
      </button>
      <button
        onClick={() => handleEditTodo({ id, text })}
        className={style.editButton}
        type="button"
        disabled={isEditing}
      >
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};

export default TodoListItem;
