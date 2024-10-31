import { Component, VNode } from "inferno";
import {
  Header, ListView, TextListItem, SoftKey
} from "kaiuing-inferno";

interface AppState {
  selectedIndex: number;
  items: string[];
}

class App extends Component<{}, AppState> {
  state: AppState = {
    selectedIndex: 0,
    items: [
      "First Item",
      "Second Item",
      "Third Item",
      "Fourth Item",
      "Fifth Item"
    ]
  };

  render(): VNode {
    const { selectedIndex, items } = this.state;

    return (
      <div className="kai-app">
        <Header text="My Parcels" />
        <ListView
          cursor={selectedIndex}
          cursorChangeCb={(index: number) => this.setState({ selectedIndex: index })}
        >
          {items.map((item, index) => (
            <TextListItem
              key={index}
              primary={item}
              isFocused={index === selectedIndex}
            />
          ))}
        </ListView>

        <SoftKey
          leftText="Back"
          leftCb={() => {
            console.log("Left softkey pressed");
          }}
          centerText="SELECT"
          centerCb={() => {
            console.log("Selected:", items[selectedIndex]);
          }}
          rightText="More"
          rightCb={() => {
            console.log("Right softkey pressed");
          }}
        />
      </div>
    );
  }
}

export default App;