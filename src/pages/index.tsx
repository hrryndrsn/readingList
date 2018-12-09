import React from "react";
import styled from "styled-components";
import { sampleData } from "../readingList";
import App from "../components/app";

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

//------------------------------------------------------

interface IndexPageProps {}

export default class IndexPage extends React.Component<IndexPageProps, {}> {
  render() {
    return (
      <Container>
        <h1 >Zord reading list</h1>
        <p >Things to read 🤟</p>
        <App readingList={sampleData}/>
      </Container>
    );
  }
}
