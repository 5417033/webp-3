import { useEffect, useState } from "react";
import { fetchImages } from "./api";

function Header() {
  return (
    <header className="hero is-dark is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title"> Dog Images</h1>
        </div>
      </div>
    </header>
  );
}

function Image(props) {
  const url = "https://cdn.shibe.online/shibes/e3889830fd8477f431ae613a201084958f8e995c.jpg";
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
        <img src={props.src} alt="cute dog!" />
        </figure>
      </div>
    </div>
  );
}

function Loading() {
  return <p>Loading...</p>;
}

function Gallery(props) {
  const { urls } = props;
  if (urls == null) {
    return <Loading />;
  }
  return (
    <div className="columns is-vcentered is-multiline">
      {urls.map((url) => {
        return (
          <div key={url} className="column is-3">
            <Image src={url} />
          </div>
        );
      })}
    </div>
  );
}

function Main() {
  const [urls, setUrls] = useState(null);
  useEffect(() => {
    fetchImages().then((urls) => {
      setUrls(urls);
    });
  }, []);
  return (
    <main>
      <section className="section">
        <div className="container">
        <Gallery urls={urls} />
        </div>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>Dog images are retrieved shibe.online</p>
        <p>学籍番号：5417033</p>
        <p>氏名：松村亮直</p>
        <p>日本大学文理学部情報化学科Webプログラミング演習課題３</p>
        <p>
          <a href="https://shibe.online/">shibe.online/</a>
        </p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;