import React from 'react';
import ReactDOM from 'react-dom';
import TitleComponent from './components/TitleComponent'

const title = 'Second app';

ReactDOM.render(
  <TitleComponent title={title}/>,
  document.getElementById('root2')
);
