import { connect, Dispatch } from "react-redux";
import { toggleTodo } from './actionCreators';
import TodoList from './TodoList';
import { IState, ITodo, IToggleTodo, VisibilityFilter } from './types';


const getVisibleTodos = (todos: ITodo[], visibilityFilter: VisibilityFilter): ITodo[] => {
    switch (visibilityFilter) {
        case VisibilityFilter.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
        case VisibilityFilter.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case VisibilityFilter.SHOW_ALL:
        default:
            return todos;
    }
};

interface IStateToProps {
    todos: ITodo[]
}

interface IDispatchToProps {
    onTodoClick: (id: number) => void
}

const mapStateToProps = (state: IState): IStateToProps => (
    {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)        
    }
);

const mapDispatchToProps = (dispatch: Dispatch<IToggleTodo>): IDispatchToProps => (
    {
        onTodoClick: (id: number) => dispatch(toggleTodo(id))
    }
)

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;

