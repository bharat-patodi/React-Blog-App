export default function ArticlePreview(props) {
  return (
    <article className="article-preview">
      <h2>{props.title}</h2>
      <p>--- {props.author.username}</p>
      <p>{props.description.split(" ").slice(0, 30).join(" ") + " ..."}</p>
      <p>Dated: {props.createdAt}</p>
      <button>Read More</button>
      <button>💖</button>
    </article>
  );
}
