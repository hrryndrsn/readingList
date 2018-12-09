import React from "react"
import styled from "styled-components"
import {sampleData} from '../readingList' ;

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  font-family: sans-serif;
`

const ListContainer = styled.div`
  margin-top: 24px;
`

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 24px 0;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    background: #eee
  }
`

const Description = styled.div`
  flex: 1;
`

const Username = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
`

const Excerpt = styled.p`
  margin: 0;
  color: rgba(0,0,0, 0.7)
`

const User = props => (
  <UserWrapper>
    <Description>
      <Username>{props.username}</Username>
      <Excerpt>{props.excerpt}</Excerpt>
    </Description>
  </UserWrapper>
)


interface IndexPageProps {}
  
export default class IndexPage extends React.Component<IndexPageProps, {}> {
  render() {
    return (
        <Container>
        <h1>Zord reading list</h1>
        <p>Things to read 🤟</p>
        <ListContainer>
          <User
            username={sampleData[0].title}
            excerpt={sampleData[0].description}
          />
          <User
            username={sampleData[1].title}
            excerpt={sampleData[1].description}
          />
        </ListContainer>
      </Container>
    )
  }
}