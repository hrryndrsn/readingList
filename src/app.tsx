import * as React from "react";
import * as ReactDOM from "react-dom";
import { BookList } from "./bookList";

// Types
type AppProps = { readingList: string[] };
type AppState = { count: number; readingList: string[] };

class App extends React.Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      readingList: ["zord"]
    };
  }

  render() {
    return (
      <div>
        <h1>
          Count {this.state.count}
        </h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <BookList readingList={this.props.readingList} />
      </div>
    );
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };
}

const readingList: string[] = ["Moby Dick", "War & Peace", "Zord, Zordie", "The Obstacle is the way"];

ReactDOM.render(
  <App readingList={readingList} />,
  document.getElementById("root")
);
