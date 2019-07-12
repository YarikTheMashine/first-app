import React, {Component} from 'react';

class Random extends Component {
    constructor(props) {
        super(props);
        this.state = { randText: "Text" };
    }

    handleTextChange = () => {
        this.setState({ 
            randText: Math.floor(Math.random() * 100)
        });
    }

    render() {
        return (<div>
            <p>
                {this.state.randText}
            </p>
            <button onClick={this.handleTextChange}>
                Press me pls
            </button>
        </div>
        );
    }
}

export default Random;