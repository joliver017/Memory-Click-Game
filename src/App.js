import React from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";
import "./App.css";

class App extends React.Component {
  state = {
    cards,
    clickedCards: [],
    score: 0,
    winlose: ""
  }

  handleClick = (id) => {
    let clickedCards = this.state.clickedCards
    
    if(clickedCards.includes(id)) {
      this.setState({ clickedCards: [], score: 0})
      this.setState({winlose: "You lose"})
      return;
    }
    else {
      clickedCards.push(id)
      this.setState({score: this.state.score + 1, winlose: ""})
    }
    console.log(this.state)

    for (let i = 0; i<cards.length; i++) {
      let j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    if (this.state.score === 9) {
      this.setState({winlose: "You win!", clickedCards: [], score: 0})
      return;
    }
  }

  render() {
    return (
    <Wrapper>
      <h1 className="header">Memory Click Game</h1>
      <h2 className="subheader">Don't click the same image twice</h2>
      <h2 className="subheader">Total = {this.state.score}</h2>
      <h1 className="header">{this.state.winlose}</h1>
      
      {this.state.cards.map((props) => (
        <Card 
        {...props}
        key={props.id}
        handleClick={this.handleClick}/>
      )
      )}
      
    </Wrapper>
  );
  }
}

export default App;
