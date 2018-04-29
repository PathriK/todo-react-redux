import * as React from 'react';
import { connect, Dispatch } from "react-redux";
import { addTodo } from "./actionCreators";
import { IAddTodo } from './types';

const submitAction = (e: React.FormEvent<HTMLFormElement>, input: HTMLInputElement, dispatch: Dispatch<IAddTodo>) => {
    e.preventDefault();
    if (!input.value.trim()) {
        return;
    }
    dispatch(addTodo(input.value));
    input.value = '';
};

const AddTodo = ({dispatch}: {dispatch: Dispatch<IAddTodo>}) => {
    let input: HTMLInputElement;
    return (
        <div>
            
            <form onSubmit={
                // tslint:disable-next-line:jsx-no-lambda
                e => {
                submitAction(e, input, dispatch);
            }}>
                <input ref={(node: HTMLInputElement) => {input = node}} />
                <button type="submit"> Add </button>
            </form>
        </div>
    );      
};
export default connect()(AddTodo);