import * as React from "react";
import { BookItem } from "./bookItem";

type BookListProps = { readingList: string[] };

export const BookList: React.FunctionComponent<BookListProps> = ({
  readingList
}) => (
  <div>
    {readingList.map((str, index) => {
      return <BookItem title={str}/>
    })}
  </div>
);
