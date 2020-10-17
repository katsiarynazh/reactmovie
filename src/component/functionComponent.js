import React, {PureComponent, Component} from 'react';
import HeaderComponent from './headerComponent';


function FunctionComponent() {
    return <div>
             <HeaderComponent/>
             <h2 id="id_003" className="function" key="003key">
                 Hello Functional Component
             </h2>
           </div>
 }

export default FunctionComponent;
