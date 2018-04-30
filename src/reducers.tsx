import { combineReducers } from "redux";
import { ActionType,  IAddTodo, IApplyFilter, ITodo, IToggleTodo, VisibilityFilter } from "./types";

const visibilityFilter = (state = VisibilityFilter.SHOW_ALL, action: IApplyFilter) => {
    switch (action.type) {
        case ActionType.FILTER_TODO:
            return action.filter;    
        default:
            return state;
    }
}

const todos = (state: ITodo[] = [], action: IAddTodo | IToggleTodo) => {
    switch (action.type) {
        case ActionType.ADD_TODO:
            return [
                ...state,
                {
                    completed: false,
                    id: (state.length + 1),
                    text: (action as IAddTodo).text                    
                }
            ];
        case ActionType.TOGGLE_TODO:
            return state.map( (todo) => {
                if (todo.id === (action as IToggleTodo).id){
                    return Object.assign({}, todo, {completed: !todo.completed});
                }
                return todo;
            });
    
        default:
            return state;
    }
}

const todoApp = combineReducers( {
    todos,
    visibilityFilter
    });
export default todoApp;