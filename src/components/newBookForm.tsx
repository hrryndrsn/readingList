import React from "react";
import styled from "styled-components";
import { eventNames } from "cluster";

//------------------------------------------------------

const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  margin: 40px 12px;
`;
const InlineEdit = styled.input`
  height: 3em;
  padding: 0;
  font-size: 24px;
  outline: none;
  border: none;
  background: none;
`;
const FormInputGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const BookFormControls = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
`;

const SubmitButton = styled.button`
  margin-top: 50px;
  height: 50px;
  border-radius: 25px;
  outline: none;
`;
const FormLabel = styled.label`
  font-size: 16px;
  font-style: italic;
  color: rgba(0, 0, 0, 0.3);
`;
//------------------------------------------------------

type Book = {
  title: string;
  author: string;
  description: string;
};

interface NewBookFormProps {
  title: string;
  addNewBook: (newBookData: Book) => void
}

interface NewBookFormState {
  title: string;
  description: string;
  auther: string;
  price: number;
}

export default class NewBookForm extends React.Component<
  NewBookFormProps,
  NewBookFormState
> {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      auther: "",
      price: 0
    };
  }

  updateFormData = evt => {
    switch (evt.target.name) {
      case "title":
        this.setState({ title: evt.target.value });
        break;
      case "description":
        this.setState({ description: evt.target.value });
        break;

      case "auther":
        this.setState({ auther: evt.target.value });
        break;

      case "price":
        let flt = parseFloat(evt.target.value);
        this.setState({ price: flt });
        break;

      default:
        break;
    }
  };

  formSubmit = evt => {
    evt.preventDefault();
    let newBook = {
      title: this.state.title,
      author: this.state.auther,
      description: this.state.description,
    };

    //call parent component here 
    this.props.addNewBook(newBook)
  };

  render() {
    return (
      <FormContainer onSubmit={this.formSubmit}>
        <FormInputGroup>
          <FormLabel>Title</FormLabel>
          <InlineEdit
            type="text"
            name="title"
            placeholder="..."
            value={this.state.title}
            onChange={this.updateFormData}
          />
        </FormInputGroup>
        <FormInputGroup>
          <FormLabel>Author</FormLabel>
          <InlineEdit
            type="text"
            name="auther"
            placeholder="..."
            value={this.state.auther}
            onChange={this.updateFormData}
          />
        </FormInputGroup>

        <FormInputGroup>
          <FormLabel>Description</FormLabel>
          <InlineEdit
            type="text"
            name="description"
            placeholder="..."
            value={this.state.description}
            onChange={this.updateFormData}
          />
        </FormInputGroup>

        {/* <FormInputGroup>
          <FormLabel>Price</FormLabel>
          <InlineEdit
            type="number"
            name="price"
            value={this.state.price}
            onChange={this.updateFormData}
          />
        </FormInputGroup> */}

        <BookFormControls>
          <SubmitButton type="submit">Add</SubmitButton>
        </BookFormControls>
      </FormContainer>
    );
  }
}
