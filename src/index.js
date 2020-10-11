import React, {PureComponent, Component} from 'react';
import ReactDom from 'react-dom';

class HeaderComponent extends Component {

    state = {
        isPermission : true,
        title : 'Title pure component'
    };

    render() {
        return(
            <h3 id="id_002" className="component" key="002key">
                <HeaderPureComponent title={this.state.title} />
                {this.state.isPermission ? (
                    <h3>Hello React Component!</h3>
                ) : (
                    <h3>Bay React Component </h3>
                )}
            </h3>)
    }
}

class HeaderPureComponent extends PureComponent  {

    render() {
        return <h4 id="id_001" className="pure component" key="001key" title={this.props.title}>
                    Hello Pure Component
               </h4>
    }
}

function HeaderFunction() {
   return <div>
            <HeaderComponent/>
            <h2 id="id_003" className="function" key="003key">
                Hello Functional Component
            </h2>
          </div>
}

const element = React.createElement(
    'h1',
    {
        id: "id_004",
        className: 'element',
        key: "004key"
    },
    "Hello Create Element", HeaderFunction()
);

ReactDom.render(element, document.getElementById('root'));
