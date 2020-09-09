import React, {Component} from 'react';
import '../common/Custom.css';

class Side extends Component {

    render() {
        return (
            <div className="side">
                <a href="/">Ex0</a><br />
                <a href="/ex1">Ex1</a><br />
                <a href="/ex2">Ex2</a><br />
            </div>
        )
    }
}

export default Side;