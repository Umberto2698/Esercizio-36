import { Component } from "react";
import SingleComment from "./SingleComment";

class CommentsList extends Component {
  render() {
    return (
      <>
        {this.props.commentsList.map((comment, index) => {
          return <SingleComment display={comment} key={index}></SingleComment>;
        })}
      </>
    );
  }
}

export default CommentsList;
