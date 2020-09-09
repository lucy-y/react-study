import React, {Component} from 'react';

class Ex0 extends Component {
    state = {
        hello : "init"
    }

    handleChange = () => {
        this.setState({
            hello : "change"
        })
    }

    render() {
        return (
            <div>
                <span>state : {this.state.hello}</span>
                <button onClick={this.handleChange}>Click</button>
            </div>
        )
    }
}

export default Ex0;