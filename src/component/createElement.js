import React from 'react';
import FunctionComponent from './functionComponent';

const Element = React.createElement(
    'h1',
    {
        id: "id_004",
        className: 'element',
        key: "004key"
    },
    "Hello Create Element", FunctionComponent()
);

export default Element;
