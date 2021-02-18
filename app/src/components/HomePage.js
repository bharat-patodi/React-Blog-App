import React from "react";
import Loader from "./Loader";
import ArticlePreview from "./ArticlePreview";
import { NavLink } from "react-router-dom";
import { ARTICLE_URL, TAGS_URL } from "./../utils/constants";

class Home extends React.Component {
  // constructor(props) {
  //   super(props);
  // this.state = {
  //   data: "",
  //   pageNumber: 1,
  // };
  // }
  state = {
    articles: null,
    error: "",
    tags: null,
    articlesCount: 0,
    articlesPerPage: 10,
    activePageIndex: 1,
  };
  componentDidMount() {
    // Is try catch the right way to go about handling fetch error?
    // FETCH for Articles
    // fetch(ARTICLE_URL + "/?limit=" + this.state.articlesPerPage)
    //   .then((res) => {
    //     // Manage the 404 error which doesn't get displayed in the console.
    //     if (!res.ok) throw new Error(res.statusText);
    //     return res.json();
    //   })
    //   .then((data) =>
    //     this.setState(
    //       {
    //         articles: data.articles,
    //         error: "",
    //         articlesCount: data.articlesCount,
    //       },
    //       () => {
    //         console.log(this.state.articles);
    //       }
    //     )
    //   )
    //   .catch((err) => {
    //     this.setState({
    //       error: "Not able to fetch articles",
    //     });
    //   });
    this.fetchData();
    // FETCH for Tags
    fetch(TAGS_URL)
      .then((res) => {
        // Manage the 404 error which doesn't get displayed in the console.
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then(({ tags }) => {
        this.setState({ tags, error: "" });
      })
      .catch((err) => {
        this.setState({ error: "Not able to fetch tags" });
      });
  }

  componentDidUpdate(_prevProps, prevState) {
    // Be careful, this can be recursive with the setState inside fetchData updating the component. This could be an infinite loop. The condition overrrides it here though
    if (prevState.activePageIndex !== this.state.activePageIndex) {
      this.fetchData();
    }
  }
  // FETCH for pagination
  fetchData = () => {
    let limit = this.state.articlesPerPage;
    let offset = (this.state.activePageIndex - 1) * limit;

    fetch(ARTICLE_URL + "/?offset=" + offset + "&limit=" + limit)
      .then((res) => {
        // Manage the 404 error which doesn't get displayed in the console.
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then((data) =>
        this.setState(
          {
            articles: data.articles,
            error: "",
            articlesCount: data.articlesCount,
          },
          () => {
            console.log(this.state.articles);
          }
        )
      )
      .catch((err) => {
        this.setState({
          error: "Not able to fetch articles",
        });
      });
  };

  // Updating current page index
  updateCurrentPageIndex = (index) => {
    this.setState(
      {
        activePageIndex: index,
      },
      this.fetchData
    );
  };

  render() {
    if (this.state.error) return <p>Error Encountered</p>;
    // The Loader
    if (!this.state.articles) return <Loader />;

    return (
      <div className="home container">
        <section className="hero">
          <h1>A blog post for every broken thought</h1>
        </section>
        <section className="home-grid">
          <section className="article-preview-showcase">
            {this.state.articles
              .filter((article) => article.author.username !== "aaratigupta")
              .map((article) => {
                return <ArticlePreview {...article} key={article.slug} />;
              })}
          </section>

          <aside className="tag-bar">
            <h3>Tags</h3>
            {this.state.tags.map((tag) => (
              <button className="tag standard-btn" key={tag}>
                {tag}
              </button>
            ))}
          </aside>
        </section>

        <section className="pagination">
          {Array.from(
            {
              length: Math.ceil(
                this.state.articlesCount / this.state.articlesPerPage
              ),
            },
            (_, i) => i + 1
          ).map((page) => {
            return (
              <span
                className={
                  this.state.activePageIndex === page
                    ? "page-number active-link"
                    : "page-number"
                }
                onClick={() => {
                  this.updateCurrentPageIndex(page);
                }}
                key={page}
              >
                {page}
              </span>
            );
          })}
        </section>
      </div>
    );
  }
}

export default Home;
