import React from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";
import "./App.css";

class App extends React.Component {
  state = {
    cards,
    clickedCards: [],
    score: 0
  }

  handleClick = (id) => {
    let clickedCards = this.state.clickedCards
    
    if(clickedCards.includes(id)) {
      this.setState({ clickedCards: [], score: 0})
      return;
    }
    else {
      clickedCards.push(id)
      this.setState({score: this.state.score + 1})
    }
    console.log(this.state)
  }

  render() {
    return (
    <Wrapper>
      <h1 className="title">Memory Click Game</h1>
      <h2 className="title">Total = {this.state.score}</h2>
      
      {this.state.cards.map((props) => (
        <Card 
        {...props}
        handleClick={this.handleClick}/>
      )
      )}
      
    </Wrapper>
  );
  }
}

export default App;
