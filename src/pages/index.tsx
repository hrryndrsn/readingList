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
  padding: 0 12px
`
const SiteDescription = styled.p`
  padding: 0 12px
`

//------------------------------------------------------

interface IndexPageProps {}

export default class IndexPage extends React.Component<IndexPageProps, {}> {
  render() {
    return (
      <Container>
        <SiteTitle >Zord reading list</SiteTitle>
        <SiteDescription >Things to read 🤟</SiteDescription>
        <BookList readingList={sampleData}/>
      </Container>
    );
  }
}
