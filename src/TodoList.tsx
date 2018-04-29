import * as React from 'react';
import Todo from './Todo';
import { ITodo } from './types';


interface ITodoListProps {
    todos: ITodo[],
    onTodoClick(id: number): void
}

const TodoList:React.SFC<ITodoListProps> = ({todos, onTodoClick}) => (
  <ul>  
  {todos.map( todo => <Todo key={todo.id} completed={todo.completed} onClick={
    // tslint:disable-next-line:jsx-no-lambda
    () => onTodoClick(todo.id)
    } text={todo.text} /> )}
  </ul>
);

export default TodoList;