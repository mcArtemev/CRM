import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import store from 'store';
import Router from './router';
store.auth();

ReactDOM.render(<Router/>, document.getElementById('app'));
