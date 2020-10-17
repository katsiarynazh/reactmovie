import React, { Component } from 'react';
import HeaderPureComponent from './pureComponent'

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

export default HeaderComponent;
