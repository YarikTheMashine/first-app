import React from "react";
import "./articleItems.scss";
import { Link } from "react-router-dom";
import RandomRating from "../RandomRating/RandomRating";

const ArticleItems = ({ title, id, description, img, randomValue }) => {
  return (
    <div className="col-sm-4 text-white" key={id}>
      <img className="rounded-circle" src={img} height="140" width="140" />
      <h3 id="titleHeight">{title}</h3>
      <div id="allign">
        <p>
          {description.length > 110
            ? description.substr(0, 109) + `...`
            : description}
          <p>Rating: {randomValue}</p>
          <Link className="btn btn-primary" to={`/articles/${id}`}>
            View details
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RandomRating(ArticleItems);
