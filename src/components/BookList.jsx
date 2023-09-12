import { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import library from "../data/scifi.json";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = { title: null };

  filterBookList = (e) => {
    e.preventDefault();
    if (this.state.title === "") {
      this.setState({ searchedBook: library });
    } else {
      let searchedBook = library.filter((book) => book.title.toUpperCase().includes(this.state.title.toUpperCase()));
      this.setState({ searchedBook });
    }
  };

  render() {
    return (
      <main className="h-100">
        <div className="container">
          <div className="mb-5 px-4">
            <Form onSubmit={this.filterBookList}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Titolo libro</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Inserisci il titolo di un libro"
                  onChange={(input) => {
                    this.setState({ title: input.target.value });
                  }}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
          <div className="row d-flex align-items-center justify-content-between">
            {this.state.searchedBook
              ? this.state.searchedBook.map((book, index) => (
                  <div className="col-sm-6 col-md-4 col-lg-3 mb-2" key={index}>
                    <SingleBook
                      book={book}
                      SelectBookId={this.props.SelectBookId}
                      selectedBook={this.props.selectedBook}
                    ></SingleBook>
                  </div>
                ))
              : library.map((book, index) => (
                  <div className="col-sm-6 col-md-4 col-lg-3 mb-2" key={index}>
                    <SingleBook
                      book={book}
                      SelectBookId={this.props.SelectBookId}
                      selectedBook={this.props.selectedBook}
                    ></SingleBook>
                  </div>
                ))}
          </div>
        </div>
      </main>
    );
  }
}

export default BookList;
