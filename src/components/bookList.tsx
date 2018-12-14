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

const BookCardLayout = styled.div`
  display: grid;
`;

const EmptyStateList = styled.div`
  text-align: center;
  margin: 20vh 10px;
  color: rgba(0,0,0, 0.2);
`;

const BookTitle = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
  color: rgba(0,0,0,1)
`;

const Byline = styled.p`
  margin: 0;
  color: rgba(0, 0, 0, 0.6);
`;

const Author = styled.p`
  margin: 0;
  color: rgba(0, 0, 0, 0.6);
`;

const Details = styled.div`
 display: grid;
 grid-template-rows: 1fr 1fr;;
 gap: 12px;
`;

//------------------------------------------------------

type book = {
  title: string;
  author: string;
  description: string;
};

const User = props => (
  <UserWrapper >
    <BookCardLayout>
      <BookTitle>{props.title}</BookTitle>
      <Details>
        <Author>{props.author}</Author>
        <Byline>{props.byline}</Byline>
      </Details>
    </BookCardLayout>
  </UserWrapper>
);

interface AppProps {
  readingList: book[]
}

export default class BookList extends React.Component<AppProps> {
  render() {
    if (this.props.readingList.length === 0) {
      //no books
      return (
        <EmptyStateList>Read some boooks m80</EmptyStateList>
      )
    } else {
      return (
        <ListContainer>
          { 
            this.props.readingList.map((book, index) => {
            return (<User
              key={index}
              title={book.title}
              author={book.author}
              byline={book.description}
            />);
          })}
        </ListContainer>
    );
    }
    
  }
}

