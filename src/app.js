import React from 'react';
import ReactDOM from 'react-dom';
import Person from './components/Person'
import Details from './components/Details'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { Router } from 'react-router-dom';
import AppRouter from './routers/AppRouter';


// ReactDOM.render(<Person person={PERSON}/>, document.getElementById('app'));

// ReactDOM.render(<Pers />, document.getElementById('app'));
ReactDOM.render(<AppRouter />, document.getElementById('app'));