import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n';
import './firebase/firebase';


ReactDOM.render(
    <Suspense fallback={<div>Loading...</div>}>
        <App />
    </Suspense>,
    document.getElementById('root')
);

reportWebVitals();
