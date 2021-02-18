import { Link } from "react-router-dom";

export default function ArticlePreview(props) {
  const { author, slug, createdAt, description, title } = props;
  return (
    <article className="article-preview">
      <h2>{title}</h2>
      <p>--- {author.username}</p>
      <p>{description.split(" ").slice(0, 30).join(" ") + " ..."}</p>
      <p>Dated: {createdAt}</p>
      <div className="actions">
        <Link to={`/articles/${slug}`}>
          <button className="standard-btn">Read More</button>
        </Link>
        <button className="standard-btn">💖</button>
      </div>
    </article>
  );
}
