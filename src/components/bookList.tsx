import React from "react";
import styled from "styled-components";

//------------------------------------------------------

const ListContainer = styled.div`
  margin-top: 10px;
`;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 5px;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
  
  }
`;

const Description = styled.div`
  flex: 1;
`;

const Username = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
`;

const Excerpt = styled.p`
  margin: 0;
  color: rgba(0, 0, 0, 0.7);
`;

//------------------------------------------------------

type book = {
  title: string;
  description: string;
};

const User = props => (
  <UserWrapper >
    <Description>
      <Username>{props.username}</Username>
      <Excerpt>{props.excerpt}</Excerpt>
    </Description>
  </UserWrapper>
);

interface AppProps {
  readingList: book[]
}

export default class BookList extends React.Component<AppProps> {
  render() {
    return (
        <ListContainer>
          { this.props.readingList.map((book, index) => {
            return (<User
              key={index}
              username={book.title}
              excerpt={book.description}
            />);
          })}
        </ListContainer>
    );
  }
}
