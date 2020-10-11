import React from 'react';
import ReactDom from 'react-dom';
import logo from './logo.svg';
import './App.css';

const myHeader = React.createElement(
  "h1",
  {
    id: "id_001",
    className: "header_title",
    key: "001"
   },
  "Hello React"
)

const rootElement = document.getElementById('root');

ReactDom.render(myHeader, rootElement);

