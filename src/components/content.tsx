import avatar from "../assets/image-avatar.webp";
import article from "../assets/illustration-article.svg";

export const Footer = () => {
  return (
    <>
      <footer className="text-center text-xs">
        Challenge by{" "}
        <a
          className="underline"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a className="underline" href="https://github.com/jjdavenport">
          jjdavenport
        </a>
      </footer>
    </>
  );
};

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="font-figtree bg-yellow flex h-screen flex-col text-base">
        {children}
      </div>
    </>
  );
};

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-1 flex-col items-center justify-center">
        {children}
      </div>
    </>
  );
};

export const Main = () => {
  return (
    <>
      <main className="drop-shadow-card flex h-[31.3125rem] w-[20.4375rem] flex-col gap-6 rounded-[1.25rem] border border-black bg-white p-6 md:h-[32.625rem] md:w-96">
        <img
          className="h-[12.5rem] w-[17.4375rem] rounded-[0.625rem] object-cover md:w-auto"
          src={article}
          alt="card"
        />
        <div className="flex w-[17.4375rem] flex-col gap-3 md:w-auto">
          <div className="bg-yellow flex h-[1.625rem] w-[4.5rem] items-center justify-center rounded-sm px-3 py-1 md:h-auto md:w-fit">
            <h2 className="text-xs leading-[150%] font-extrabold md:text-sm">
              Learning
            </h2>
          </div>
          <h3 className="text-xs leading-[150%] font-medium tracking-normal text-black md:text-sm">
            Published 29 Feb 2024
          </h3>
          <h1 className="hover:text-yellow cursor-pointer text-xl font-extrabold tracking-normal text-black transition-colors md:text-2xl">
            HTML & CSS foundations
          </h1>
          <p className="text-grey text-sm leading-[150%] font-medium tracking-normal md:text-base">
            These languages are the backbone of every website, defining
            structure, content and presentation.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <img className="size-8 object-contain" src={avatar} alt="card" />
          <h4 className="text-sm font-bold tracking-normal text-black">
            Greg Hooper
          </h4>
        </div>
      </main>
    </>
  );
};
