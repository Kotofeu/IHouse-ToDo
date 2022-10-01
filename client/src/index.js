import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TodosStore from './store/TodosStore';
export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
