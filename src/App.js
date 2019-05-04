import React from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";
import "./App.css";

class App extends React.Component {
  state = {
    cards: cards
  }

  render() {
    return (
    <Wrapper>
      <h1 className="title">Memory Click Game</h1>
      
      {this.state.cards.map((props) => (
        <Card {...props}/>
      )
      )}
      
    </Wrapper>
  );
  }
}

export default App;
