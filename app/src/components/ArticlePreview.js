import { Link } from "react-router-dom";

export default function ArticlePreview(props) {
  return (
    <article className="article-preview">
      <h2>{props.title}</h2>
      <p>--- {props.author.username}</p>
      <p>{props.description.split(" ").slice(0, 30).join(" ") + " ..."}</p>
      <p>Dated: {props.createdAt}</p>
      <div className="actions">
        <Link to={`/articles/${props.slug}`}>
          <button className="standard-btn">Read More</button>
        </Link>
        <button className="standard-btn">💖</button>
      </div>
    </article>
  );
}
