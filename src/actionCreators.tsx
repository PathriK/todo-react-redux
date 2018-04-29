import { ActionType, VisibilityFilter } from "./types";
import { IAddTodo, IApplyFilter, IToggleTodo } from "./types";


const addTodo = (text: string): IAddTodo => {
    return {
        type: ActionType.ADD_TODO,
        text    
    }
};

const toggleTodo = (id: number): IToggleTodo => {
    return {
        type: ActionType.TOGGLE_TODO,
        id
    }
}

const applyFilter = (filter: VisibilityFilter): IApplyFilter => {
    return {
        type: ActionType.FILTER_TODO,
        filter
    }
}


export { addTodo, toggleTodo, applyFilter };