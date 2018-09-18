import React from 'react';
import WassupFormContainer from './WassupFormContainer';
import WassupList from './WassupList';

const Homepage = props => {
    return (
        <div>
            <h1>WassUp!</h1>
            <WassupFormContainer addPost={props.addPost} />
            <WassupList posts={props.posts} />
            <h4>Copyright 2018</h4>
        </div>
    );
};

export default Homepage;
