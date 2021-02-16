import React from "react";

class NewArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: [],
    };
  }

  /**
   * Handling commas as the main way to add a tag.
   * No duplicates
   * No trailing whitespaces
   */

  handleTag = (e) => {
    if (
      e.target.value !== "" &&
      e.target.value !== "," &&
      e.target.value[e.target.value.length - 1] === ","
    ) {
      let temporaryInputArr = [
        ...new Set(
          e.target.value
            .slice(0, -1)
            .split(",")
            .map((val) => val.trim())
        ),
      ];
      this.setState(
        {
          tag: temporaryInputArr,
        },
        () => {
          console.log(this.state.tag);
        }
      );
    }
  };

  /**
   * FormData being used here.
   * It is intriguing. It's not straight forward and can take time
   */

  handleSubmit = (e) => {
    e.preventDefault();

    let createArticle = document.querySelector("#create-article");
    console.log(e.target.parentNode.entries, createArticle);

    let formData = new FormData(createArticle);
    console.log("entries: ", formData.entries());
    console.log("keys: ", formData.keys());
    console.log("values: ", formData.values());
    console.log(
      [...formData].reduce((acc, curr) => {
        acc[curr[0]] = curr[1];
        return acc;
      }, {})
    );

    let formDataObj = [...formData].reduce((acc, curr) => {
      acc[curr[0]] = curr[1];
      return acc;
    }, {});

    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    fetch("https://mighty-oasis-08080.herokuapp.com/api/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        charset: "utf-8",
        Authorization:
          "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMmJkNWJiYzQ2ZGM4MDAxN2YwZmU1MyIsInVzZXJuYW1lIjoibWdvYW4iLCJleHAiOjE2MTg2Njk1MDAsImlhdCI6MTYxMzQ4NTUwMH0.9illwXDKPWwPSuKthKj1EN_EeuMQ4upMPHCO7k2W-LM",
      },
      body: JSON.stringify({
        article: { ...formDataObj },
      }),
      // body: JSON.stringify({
      //   article: {
      //     title: "Sending form data",
      //     body:
      //       "Once the form data has been validated on the client-side, it is okay to submit the form. And, since we covered validation in the previous article, we're ready to submit! This article looks at what happens when a user submits a form — where does the data go, and how do we handle it when it gets there? We also look at some of the security concerns associated with sending form data.",
      //     description:
      //       "An HTML form on a web page is nothing more than a convenient user-friendly way to configure an HTTP request to send data to a server. This enables the user to provide information to be delivered in the HTTP request.",
      //   },
      // }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  render() {
    return (
      <div className="container new-article-page">
        <h1>New Article</h1>
        <form
          action=""
          className="new-article-form"
          id="create-article"
          onSubmit={this.handleSubmit}
        >
          <label htmlFor="">
            Enter title:
            <input
              type="text"
              name="title"
              id="title"
              placeholder="title"
              required
            />
          </label>
          <label htmlFor="">
            Enter the description:
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
              required
            ></textarea>
          </label>
          <label htmlFor="">
            Enter Markdown article body:
            <textarea
              name="markdownBody"
              id="markdownBody"
              cols="30"
              rows="10"
              required
            ></textarea>
          </label>
          <label htmlFor="">
            Enter tags:
            <input
              type="text"
              name="tag"
              id="tag"
              placeholder="Tag"
              onChange={this.handleTag}
            />
          </label>
          <label htmlFor="">
            <div className="all-tags">
              {this.state.tag.map((val) => (
                <p className="tag-entry" key={val}>
                  {val}
                </p>
              ))}
            </div>
          </label>
          <br />
          <button type="submit">Add Article</button>
        </form>
      </div>
    );
  }
}

export default NewArticle;
