import * as React from 'react';

interface ITodoProps {    
    completed: boolean,
    text: string,
    onClick(e: React.MouseEvent<HTMLElement>): void
}

const Todo:React.SFC<ITodoProps> = ({onClick, completed, text}) => (
    <li 
        onClick={onClick}
        style={{
            textDecoration: completed? 'line-through': 'none'
        }}
        >
        {text}
    </li>
);

export default Todo;