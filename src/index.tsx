import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Todo from './components/Todo';
import Form from './components/Form';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <Todo /> */}
    <Form/>
  </React.StrictMode>
);
