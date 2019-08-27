import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import getAppStore from './store/store';
import { getBooks } from './actions/books';
import './styles/styles.scss';

import { Provider } from 'react-redux';

const store = getAppStore();

const template = (
    <Provider store={store}>
        <App />
    </Provider>
);

store.dispatch(getBooks()).then(() => {
    ReactDOM.render(template, document.getElementById('root'));
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
