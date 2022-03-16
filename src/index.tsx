import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './i18n';

ReactDOM.render(
    <Suspense fallback={<div>Loading...</div>}>
        <Provider store={store}>
            <App />
        </Provider>
    </Suspense>,
    document.getElementById('root')
);

reportWebVitals();
