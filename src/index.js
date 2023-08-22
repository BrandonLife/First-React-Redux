import React from 'react'
import App from './App'
import { store } from './Store'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App tab='home' />
        </Provider>
    </React.StrictMode>,
);


