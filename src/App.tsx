import * as React from 'react';
import AddTodo from './AddTodo';
import './App.css';
import Footer from './Footer';
import VisibleTodoList from './VisibleTodoList';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
