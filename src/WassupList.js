import React from 'react';
import WassupRow from './WassupRow'

let WassupList = props => {
    return (
        <div>
            <h3>
                {props.posts.map(post => {
                    return <WassupRow post={post} key={post.id} />;
                })}
            </h3>
        </div>
    );
};

export default WassupList;