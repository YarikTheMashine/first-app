import React from "react";
import "./articles.scss";
import { getArticles } from "../../api/articles";
import ArticleItems from "../ArticleItems";
import Loader from "../Loader";
import Pagination from "../Pagination";

class Articles extends React.Component {
  state = {
    articles: [],
    isLoading: true,
    isError: false,
    currentPage: 1
  };

  componentDidMount() {
    getArticles()
      .then(res => {
        // console.log(res);
        this.setState({ articles: res, isLoading: false });
      })
      .catch(rej => {
        console.log("Error in parsing module", rej);
        this.setState({ isError: true });
      });
  }

  handler = number => {
    this.setState({
      currentPage: number
    });
  };

  render() {
    const { articles, isLoading } = this.state;
    const postsPerPage = 12;

    const indexOfLastPost = this.state.currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = articles.slice(indexOfFirstPost, indexOfLastPost);
    console.log(this.state.currentPage);
    // const newArr = [];
    return (
      <div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={articles.length}
          handler={this.handler}
        />
        {!isLoading && (
          <div id="news" className="container">
            <div className="row">
              {currentPosts.map(article => (
                <ArticleItems
                  title={article.title}
                  id={article.id}
                  description={article.description}
                  img={article.img}
                />
              ))}
            </div>
          </div>
        )}
        {isLoading && <Loader />}
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={articles.length}
          handler={this.handler}
        />
      </div>
    );
  }
}

export default Articles;