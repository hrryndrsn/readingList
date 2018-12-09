import React from "react";
import styled from "styled-components";
import { sampleData } from "../readingList";
import BookList from "../components/bookList";

//------------------------------------------------------

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  font-family: sans-serif;
`;

const SiteTitle = styled.h1`
  padding: 0 12px;
`;
const SiteDescription = styled.p`
  padding: 0 12px;
`;

//------------------------------------------------------

interface IndexPageProps {}
type IndexPageState = {
  showList: boolean
  showNewBookForm: boolean
};

export default class IndexPage extends React.Component<
  IndexPageProps,
  IndexPageState
> {
  constructor(props) {
    super(props);
    this.state = {
      showList: true,
      showNewBookForm: false,
    };
  }
  render() {
    return (
      <Container>
        <SiteTitle>Zord reading list</SiteTitle>
        <SiteDescription>Things to read 🤟</SiteDescription>
        <button onClick={this.toggleList}>List</button>
        <button onClick={this.toggleNewBook}>New Book</button>
        {this.state.showList ? <BookList readingList={sampleData} /> : <div />}
      </Container>
    );
  }

  toggleList = () => {
    this.setState({ showList: true, showNewBookForm: false});
  };
  toggleNewBook = () => {
    this.setState({ showList: false, showNewBookForm: true });
  };
}
