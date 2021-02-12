import React from "react";
import Loader from "./Loader";
import ArticlePreview from "./ArticlePreview";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
  }
  componentDidMount() {
    // Is try catch the right way to go about handling fetch error?
    // try {
    //   fetch("https://mighty-oasis-08080.herokuapp.com/api/articles")
    //     .then((res) => res.json())
    //     .then((data) =>
    //       this.setState(
    //         {
    //           data: data,
    //         },
    //         () => {
    //           console.log(this.state.data.articles);
    //         }
    //       )
    //     );
    // } catch (error) {
    //   console.log(error);
    // }
  }
  render() {
    if (this.state.data) {
      return (
        <div className="home">
          <h1>A list of some writeups... </h1>
          <section className="article-preview-showcase">
            {this.state.data.articles
              .filter((article, i) => {
                return i > 0 && i < 11 && i != 2; // Corner case of bad data
              })
              .map((article) => {
                return <ArticlePreview {...article} />;
              })}
          </section>
        </div>
      );
    } else {
      return <Loader />;
    }
  }
}

export default Home;
