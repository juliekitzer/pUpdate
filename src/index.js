import React from'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './stylesheets/headerStyle.css';
import './stylesheets/style.css';

const theRootElement = document.getElementById('root');
const theRoot = ReactDOM.createRoot(theRootElement);

theRoot.render(
    <App/>
)

