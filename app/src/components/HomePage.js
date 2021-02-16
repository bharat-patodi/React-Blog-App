import React from "react";
import Loader from "./Loader";
import ArticlePreview from "./ArticlePreview";
import { NavLink } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      pageNumber: 1,
    };
  }
  componentDidMount() {
    // Is try catch the right way to go about handling fetch error?
    try {
      fetch("https://mighty-oasis-08080.herokuapp.com/api/articles")
        .then((res) => res.json())
        .then((data) =>
          this.setState(
            {
              data: data,
            },
            () => {
              console.log(this.state.data.articles);
            }
          )
        );
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    if (!this.state.data) return <Loader />;

    return (
      <div className="home container">
        <section className="hero">
          <h1>A blog post for every broken thought</h1>
        </section>
        <section className="home-grid">
          <section className="article-preview-showcase">
            {this.state.data.articles
              .filter((_, i) => {
                return i > 0 && i < 11 && i !== 2; // Corner case of bad data
              })
              .map((article) => {
                return <ArticlePreview {...article} key={article.slug} />;
              })}
          </section>
          <aside className="tag-bar">
            <h3>Tags</h3>
            {[
              ...new Set(
                this.state.data.articles.flatMap((article) => {
                  return article.tagList;
                })
              ),
            ].map((val) => (
              <button className="tag standard-btn" key={val}>
                {val}
              </button>
            ))}
          </aside>
        </section>
        <section className="pagination">
          {Array.from(
            { length: this.state.data.articles.length / 10 },
            (_, i) => i + 1
          ).map((page) => {
            return (
              <NavLink
                to="/about"
                className="page-number"
                activeClassName="active-link"
                onClick={handlePagination}
                key={page}
              >
                {page}
              </NavLink>
            );
          })}
        </section>
      </div>
    );
  }
}

function handlePagination() {}

export default Home;
