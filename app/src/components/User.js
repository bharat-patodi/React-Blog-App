export default function User() {
  return (
    <div className="container">
      <h1>User Info</h1>
      <section className="hero">
        Hero Section
        <p>
          user information
          <button>Update</button>
        </p>
        <p>
          user information
          <button>Update</button>
        </p>
        <p>
          user information
          <button>Update</button>
        </p>
      </section>
      <section className="tabs">
        <div className="tab-01">
          My Articles Tab
          <ul>
            <li>my article 1</li>
            <li>my article 2</li>
            <li>my article 3</li>
            <li>my article 4</li>
            <li>my article 5</li>
            <li>my article 6</li>
            <li>my article 7</li>
            <li>my article 8</li>
            <li>my article 9</li>
            <li>my article 10</li>
          </ul>
        </div>
        <div className="tab-02">
          Favorited Articles Tab
          <ul>
            <li>favorite article 1</li>
            <li>favorite article 2</li>
            <li>favorite article 3</li>
            <li>favorite article 4</li>
            <li>favorite article 5</li>
            <li>favorite article 6</li>
            <li>favorite article 7</li>
            <li>favorite article 8</li>
            <li>favorite article 9</li>
            <li>favorite article 10</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
