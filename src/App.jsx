// import logo from './logo.svg';
// import AllTheBooks from "./components/AllTheBooks";
// import SingleBook from "./components/SingleBook";
// import library from "./data/scifi.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Row, Col } from "react-bootstrap";
import { Component } from "react";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import CommentArea from "./components/CommentArea";

class App extends Component {
  state = {
    selectedBookId: "",
  };

  SelectBookId = (id) => {
    this.setState({ selectedBookId: id });
  };

  render() {
    return (
      <div className="App">
        <MyNav></MyNav>
        <Welcome></Welcome>
        {/* <SingleBook book={library[0]}></SingleBook> */}
        {/* <AllTheBooks></AllTheBooks> */}
        <Row>
          <Col md={8}>
            <BookList SelectBookId={this.SelectBookId} selectedBook={this.state.selectedBookId}></BookList>
          </Col>
          <Col md={4}>
            <CommentArea id={this.state.selectedBookId}></CommentArea>
          </Col>
        </Row>
        <MyFooter></MyFooter>
      </div>
    );
  }
}

export default App;
