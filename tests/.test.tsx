import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import "@testing-library/jest-dom";
import App from "../src/App";

describe("Renders the app", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("shows the main article title", () => {
    expect(screen.queryByText("HTML & CSS foundations")).toBeVisible();
  });

  it("shows the date", () => {
    expect(screen.queryByText("Published 29 Feb 2024")).toBeVisible();
  });

  it("shows the learning", () => {
    expect(screen.queryByText("Learning")).toBeVisible();
  });

  it("shows the paragraph", () => {
    expect(
      screen.getByText(
        `These languages are the backbone of every website, defining structure, content and presentation.`,
      ),
    ).toBeVisible();
  });

  it("mocks the user hovering over the h3 and checks its cursor style", () => {
    const heading = screen.getByText("HTML & CSS foundations");
    fireEvent.mouseOver(heading);
    setTimeout(() => {
      expect(heading).toHaveStyle({ cursor: "pointer" });
    }, 200);
    fireEvent.mouseOut(heading);
  });

  it("mocks the user hovering over the h3 and checks the text style", () => {
    const heading = screen.getByText("HTML & CSS foundations");
    fireEvent.mouseOver(heading);
    setTimeout(() => {
      expect(heading).toHaveStyle({ color: "hsl(47, 88%, 63%)" });
    }, 200);
    fireEvent.mouseOut(heading);
  });

  it("mocks the user hovering over the h3 and checks its classes", () => {
    const heading = screen.getByText("HTML & CSS foundations");
    fireEvent.mouseOver(heading);
    expect(heading).toHaveClass("hover:text-yellow cursor-pointer");
    fireEvent.mouseOut(heading);
  });

  it("checks the main image has alt text", () => {
    expect(screen.queryByAltText("illustration")).toHaveAttribute(
      "alt",
      "illustration",
    );
  });

  it("checks the main image has aria-hidden attribute is true", () => {
    expect(screen.queryByAltText("illustration")).toHaveAttribute(
      "aria-hidden",
      "true",
    );
  });

  it("checks that two images are rendered", () => {
    expect(screen.queryAllByRole("img")).toHaveLength(1);
  });

  it("checks the profile picture has alt text", () => {
    expect(screen.getByAltText("profile picture")).toHaveAttribute(
      "alt",
      "profile picture",
    );
  });

  it("checks the profile picture src", () => {
    const img = screen.getByAltText("profile picture");
    expect(img.src).toContain("image-avatar.webp");
  });

  it("checks the profile pictures aria-hidden attribute is false", () => {
    expect(screen.getByAltText("profile picture")).toHaveAttribute(
      "aria-hidden",
      "false",
    );
  });

  it("checks the github link class", () => {
    expect(screen.getByText("jjdavenport")).toHaveAttribute(
      "class",
      "underline",
    );
  });

  it("checks the github link style", () => {
    expect(screen.getByText("jjdavenport")).toHaveStyle({
      "text-decoration": "underline",
    });
  });

  it("checks the github link href", () => {
    expect(screen.getByText("jjdavenport")).toHaveAttribute(
      "href",
      "https://github.com/jjdavenport",
    );
  });

  it("checks the frontend mentor link class", () => {
    expect(screen.getByText("Frontend Mentor")).toHaveAttribute(
      "class",
      "underline",
    );
  });

  it("checks the frontend mentor link style", () => {
    expect(screen.getByText("Frontend Mentor")).toHaveStyle({
      "text-decoration": "underline",
    });
  });

  it("checks the frontend mentor link href", () => {
    expect(screen.getByText("Frontend Mentor")).toHaveAttribute(
      "href",
      "https://www.frontendmentor.io?ref=challenge",
    );
  });

  it("checks the frontend mentor link opens in a new tab", () => {
    expect(screen.getByText("Frontend Mentor")).toHaveAttribute(
      "target",
      "_blank",
    );
  });
});
