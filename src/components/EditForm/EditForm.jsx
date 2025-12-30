import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import style from './EditForm.module.css';

const EditForm = ({ defaultValue, cancelUpdate, updateTodo }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const value = event.target.elements.text.value;
    if (!value.trim()) {
      alert('Enter some text! The field can not be empty.');
      return;
    }
    updateTodo(value);
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button onClick={cancelUpdate} className={style.editButton} type="button">
        <MdOutlineCancel color="red" size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={defaultValue}
        autoFocus
      />
    </form>
  );
};
export default EditForm;
