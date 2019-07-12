import React from "react";

const RandomRating = (ArticleItems) => {
  class createRandomValue extends React.Component {
    randomNumber() {
      const randomValue = Math.floor(Math.random() * (100 - 1)) + 1;
      return randomValue;
    }
    render() {
      return <ArticleItems randomValue={this.randomNumber()} {...this.props} />;
    }
  }
  return createRandomValue;
};

export default RandomRating;
