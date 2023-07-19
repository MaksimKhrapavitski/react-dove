import React from 'react';
// Instead of import ReactDOM from 'react-dom' use {create Root}
// because React18 does not support ReactDOM.render() anymore
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);


// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App';


// const container = document.getElementById('root');
// const root = createRoot(container);

// root.render(<App />);

