import { FC } from "react";
import { ITodo } from "../../types";
import TodoListItem from "../TodoListItem/TodoListItem";

interface ITodoListProps {
  todos: ITodo[];
  onDone: (id: number) => void;
  onImportant: (id: number) => void;
}

const TodoList: FC<ITodoListProps> = (props) => {
  return (
    <ul>
      {props.todos.map((item) => (
        <TodoListItem
          key={item.id}
          {...item}
          onDoneClick={() => props.onDone(item.id)}
          onImportantClick={() => props.onImportant(item.id)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
