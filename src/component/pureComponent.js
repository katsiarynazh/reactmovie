import React, { PureComponent } from 'react';

class HeaderPureComponent extends PureComponent  {

    render() {
        return <h4 id="id_001" className="pure component" key="001key" title={this.props.title}>
                    Hello Pure Component
               </h4>
    }
}

export default HeaderPureComponent;
