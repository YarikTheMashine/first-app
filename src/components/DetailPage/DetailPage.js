import React from "react";
import "./detailPage.scss";
import { getArticleId } from "../../api/articles";
import { Link } from "react-router-dom";

class DetailPage extends React.Component {
  state = {
    article: [],
    isLoading: true,
    isError: false
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    getArticleId(id)
      .then(res => {
        console.log(res);
        this.setState({ article: res[0], isLoading: false });
      })
      .catch(rej => {
        console.log("Error in parsing module", rej);
        this.setState({ isError: true });
      });
  }

  render() {
    const { article, isLoading } = this.state;
    console.log(this.props);
    console.log(article);
    return (
      <div>
        <div className="container">
          <div id="detail" className="row">
            <div>
              <img
                id="imageDetail"
                src={article.img}
                data-holder-rendered="true"
                height="280px"
                width="400px"
              />
            </div>
            <div className="col-md-7 order-md-2">
              <h2>{article.title}</h2>
              <p id="fontArticle">{article.description}</p>
            </div>
          </div>
        </div>
        <div id="buttons">
          <Link className="btn btn-primary" to={`/articles/${article.id + 1}`}>
            Next
          </Link>
          <Link className="btn btn-primary" to={`/articles/${article.id - 1}`}>
            Previous
          </Link>
        </div>
      </div>
    );
  }
}

export default DetailPage;
