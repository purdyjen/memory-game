import React, { Component } from "react";
import Card from "./components/Card";
// import Wrapper from "./components/Wrapper";
import cards from "./cards.json";
import "./App.css";
import Scoreboard from "./components/Scoreboard";

function shuffle(array) {
  for(let i = array.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i +1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {

  state = {
    cards,
    score: 0,
    topScore: 0,
    showAlert: 0,
    showSuccess: 0,
    clickedcards: []
  };

  clickedCard = id => {
    let clickedcards = this.state.clickedcards;
    let score = this.state.score;
    let topScore = this.state.topScore;
    this.setState({
      showAlert: 0
    });

    if (clickedcards.indexOf(id) === -1) {
        clickedcards.push(id);
        console.log(clickedcards);
        this.handleIncrement();
        this.makeShuffle();
    } else if (this.state.score === 12) {
      this.setState({
        showSuccess: 1,
        score: 0,
        clickedcards: []
      });
    } else {
      this.setState({
        score: 0,
        clickedcards: []
      });
      console.log("duplicate");
      this.setState({
        showAlert: 1
      });
    }

    if (score > topScore) {
      this.setState({
        topScore: score
      });
    }
  }; //close clickcard
  

  handleIncrement = () => {
    this.setState({ score: this.state.score + 1});
  };

  makeShuffle = () => {
    this.setState({ cards: shuffle(cards) });
  };

  render() {
    return (
      <div className="container">
      <div
          className="alert alert-danger"
          style={{ opacity: this.state.showAlert }}
        >
          Sorry! Try again!
          </div>
        <div
          className="alert alert-success"
          style={{ opacity: this.state.showSuccess }}
        >
          Brilliant, you haven't clicked on duplicates!
          </div>
        <Scoreboard
          score={this.state.score}
          topScore={this.state.topScore}
        />
      <div>
        
        {this.state.cards.map(card => (
        <Card 
          key={card.id}
          id={card.id}
          name={card.name}
          image={card.image}
          clickedCard={this.clickedCard}
        />
        ))}
        </div>
        </div>
    );
  } //close render

} //class close

export default App;
