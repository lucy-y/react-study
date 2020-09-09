import React, {Component} from 'react';
import { Route } from 'react-router-dom';

import { Ex0, Ex1, Ex2 } from '.';
import '../common/Custom.css';

class Content extends Component {

    render() {
        return (
            <div className="content">
                <Route exact path="/" component={Ex0}/>
                <Route path="/ex1" component={Ex1}/>
                <Route path="/ex2" component={Ex2}/>
            </div>
        )
    }
}

export default Content;