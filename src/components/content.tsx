import avatar from "../assets/image-avatar.webp";
import article from "../assets/illustration-article.svg";

export const Footer = () => {
  return (
    <>
      <footer>
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/jjdavenport">jjdavenport</a>
      </footer>
    </>
  );
};

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="text-base">{children}</div>
    </>
  );
};

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export const Main = () => {
  return (
    <>
      <main>
        <img src={article} alt="card" />
        <h2>Learning</h2>
        <h3>Published 29 Feb 2024</h3>
        <h1>HTML & CSS foundations</h1>
        <p>
          These languages are the backbone of every website, defining structure,
          content and presentation.
        </p>
        <div>
          <img src={avatar} alt="card" />
          <h4>Greg Hooper</h4>
        </div>
      </main>
    </>
  );
};
