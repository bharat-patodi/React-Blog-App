import React from "react";
import Loader from "./Loader";

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
  }
  // console.log("this should be the slug: ", props.match.params.id);
  componentDidMount() {
    let { id } = this.props.match.params;
    console.log(id);
    fetch(`https://mighty-oasis-08080.herokuapp.com/api/articles/${id}`)
      .then((res) => res.json())
      .then((article) => {
        console.log(article);
        console.log("Old state: ", this.state.data);
        this.setState(
          {
            data: article,
          },
          () => {
            console.log("New State: ", this.state.data.article.title);
          }
        );
      });
  }
  render() {
    if (!this.state.data) return <Loader />;
    return (
      <div className="container article">
        <section className="hero">
          <picture className="author-info--image">
            <img src={this.state.data.article.author.image} alt="Author" />
          </picture>
          <div className="author-info--text">
            <h3>{this.state.data.article.author.username}</h3>
            <p>Following: {this.state.data.article.author.following || 0}</p>
          </div>
        </section>
        <article>
          <h1>{this.state.data.article.title}</h1>
          <p>{this.state.data.article.description}</p>
        </article>
      </div>
    );
  }
}

export default Article;
