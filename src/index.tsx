import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './core/App';
import {stores} from "./redux/store/store";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={stores}>
        <App/>
    </Provider>
);