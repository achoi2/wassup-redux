import React from 'react';

const WassupForm = props => {
    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                props.addPost(props.newPost);
            }}
        >
            <input
                type="text"
                value={props.newPost}
                onChange={props.onChange}
            />
            <input type="submit" value="Post" />
        </form>
    );
};

export default WassupForm;
