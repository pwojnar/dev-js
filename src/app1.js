import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo';

const store = createStore(rootReducer, window.initState);

render(
  <Provider store={store}>
    <div>
      <AddTodo />
      <TodoList />
    </div>
  </Provider>,
  document.getElementById('root1')
);
