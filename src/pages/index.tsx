import React from "react";
import styled from "styled-components";
import { sampleData } from "../readingList";
import BookList from "../components/bookList";
import NewBookForm from "../components/newBookForm";

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
const GHLink = styled.p`
  padding: 0 12px;
  line-height: 100%;
`;
const SiteControls = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr 1fr 1fr;
  & button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 16px;
    text-align: right;
    &:hover {
      font-weight: bold;
      &::before { 
      content: "👉";
      }
    }
  }
`;

//------------------------------------------------------

interface IndexPageProps {}
type IndexPageState = {
  showList: boolean
  showNewBookForm: boolean
  readingList: book[]
};

type book = {
  title: string;
  description: string;
};

export default class IndexPage extends React.Component<
  IndexPageProps,
  IndexPageState
> {
  constructor(props) {
    super(props);
    this.state = {
      showList: false,
      showNewBookForm: true,
      readingList: sampleData
    };
  }
  render() {
    return (
      <Container>
        <SiteTitle>Zord reading list</SiteTitle>
        <SiteControls>
          <SiteDescription>
            { this.state.showList ? "Things to read 🤟" : "Add a thing 📙"}    
          </SiteDescription>
          
          <button onClick={this.toggleList}>List</button>
          <button onClick={this.toggleNewBook}>New</button>
        </SiteControls>
        {this.state.showList ? <BookList readingList={this.state.readingList} /> : <div />}
        {this.state.showNewBookForm ? <NewBookForm title={""} /> : <div />}
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
