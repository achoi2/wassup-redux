import React from 'react';
import WassupForm from './WassupForm';

class WassupFormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newPost: ''
        };
    }

    render() {
        let onChange = event => {
            let value = event.target.value;
            this.setState({ newPost: value });
        };
        return (
            <WassupForm {...this.props} {...this.state} onChange={onChange} />
        );
    }
}

export default WassupFormContainer;