import * as React from "react";

type BookItemProps = { title: string};

export const BookItem: React.FunctionComponent<BookItemProps> = ( {title} ) => <div>{title}</div>
;
