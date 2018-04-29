export enum ActionType {
    ADD_TODO = 'ADD_TODO',
    TOGGLE_TODO = 'TOGGLE_TODO',
    FILTER_TODO = 'FILTER_TODO'
}

export enum VisibilityFilter {
    SHOW_ACTIVE= 'SHOW_ACTIVE',
    SHOW_ALL= 'SHOW_ALL',
    SHOW_COMPLETED= 'SHOW_COMPLETED'    
}

export interface IAddTodo {
    type: ActionType,
    text: string
}

export interface IToggleTodo {
    type: ActionType,
    id: number
}

export interface IApplyFilter {
    type: ActionType,
    filter: VisibilityFilter
}

export interface ITodo {
    id: number,
    completed: boolean,
    text: string
}

export type TAction = IAddTodo | IToggleTodo | IApplyFilter;

export interface IState {
    todos: ITodo[],
    visibilityFilter: VisibilityFilter
}