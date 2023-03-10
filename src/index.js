import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import tasksReducer from './features/Tasks';

const store = configureStore({
  reducer: {
    tasks: tasksReducer
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

