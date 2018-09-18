import React from 'react';
import Homepage from './HomePage';
import { connect } from 'react-redux';

const HomePage = (props) => {
  return (
    <div>
      <h1>{props.posts}</h1>
    </div>
  );
};

let HomePageContainer = connect(state => state)(Homepage)

// class HomePageContainer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       posts: []
//     };
//   }

//   componentDidMount() {
//     fetch('http://0.tcp.ngrok.io:10766/wassups.json')
//       .then(res => res.json())
//       .then(posts => {
//         this.setState({ posts: posts });
//       });
//   }

//   render() {
//     let generateId = () => {
//       return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString();
//     };
    
//     let addPost = newPost => {
//       this.setState({
//         posts: this.state.posts.concat([
//           {
//             id: generateId(),
//             content: newPost
//           }
//         ])
//       });
//     };

//     return <Homepage addPost={addPost} {...this.state} />;
//   }
// }

export default HomePageContainer;
