import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'react-photo-view/dist/react-photo-view.css';
import UserContext from "./context/UserContext/UserContext"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContext>
     <App />
    </UserContext>
  </React.StrictMode>
);


reportWebVitals();
