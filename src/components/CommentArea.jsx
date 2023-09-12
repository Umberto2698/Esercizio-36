import { Component } from "react";

import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    commetsList: [],
    display: false,
  };

  fetchComments = async () => {
    try {
      const data = await fetch("https://striveschool-api.herokuapp.com/api/books/" + this.props.id + "/comments", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTZlY2MwMzRmZjAwMTQwM2Y0ZTgiLCJpYXQiOjE2OTQwOTE4OTgsImV4cCI6MTY5NTMwMTQ5OH0.BGAZfBp-IPyouU0rxraaD0PcWzU7lubsISdRUrZtx_g",
        },
      });
      if (data.ok) {
        const comments = await data.json();
        this.setState({ commetsList: comments, display: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.id !== this.props.id) {
      this.fetchComments();
    }
  };

  render() {
    return (
      <>
        {this.state.display ? (
          this.state.commetsList.length === 0 ? (
            <div>
              <p> Currently there are no comments for this book, but you can add one!</p>
              <AddComment bookId={this.props.id}></AddComment>
            </div>
          ) : (
            <div>
              <CommentsList commentsList={this.state.commetsList}></CommentsList>
              <AddComment bookId={this.props.id}></AddComment>
            </div>
          )
        ) : (
          <p>Select a book to view its comments</p>
        )}
      </>
    );
  }
}

export default CommentArea;
