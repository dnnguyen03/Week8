import React from "react";
import axios from "axios";
import "./RandomQuote.css";

class RandomQuote extends React.Component {
  state = { advice: "", loading: false };
  componentDidMount(){
    this.fetchAdvice();
  }
  fetchAdvice = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      axios
        .get("https://api.adviceslip.com/advice")
        .then((response) => {
          const { advice } = response.data.slip;
          this.setState({ advice, loading: false });
        })
        .catch((error) => {
          console.log(error);
          this.setState({ loading: false });
        });
    }, 500);
  };

  render() {
    const { advice, loading } = this.state;

    return (
      <div className="app">
        {loading?<div className="custom-loader"></div>:
        <div className="card">
              <h1 className="heading">{advice}</h1>
              <button className="button" onClick={this.fetchAdvice}><p>GIVE ME ADVICE</p></button>
        </div>}
        
      </div>
    );
  }
}

export default RandomQuote;