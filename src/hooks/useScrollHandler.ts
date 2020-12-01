import { useEffect } from "react";

type HtmlElementOnClick = HTMLCollectionOf<Element> & {
  onclick: typeof genericScrollHandler;
};

const scrollOptions = {
  behavior: "auto",
  block: "center",
  inline: "start",
} as ScrollIntoViewOptions;

const getHtmlCollection = (className: string) =>
  (document.getElementsByClassName(className) as unknown) as HtmlElementOnClick[];

const genericScrollHandler = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  const element = document.getElementById(event.currentTarget.hash);

  if (element) {
    event.preventDefault();
    element.scrollIntoView(scrollOptions);
  }
};

const scrollHandler = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  const elementId = event.currentTarget.hash.slice(1, event.currentTarget.hash.length);
  const element = document.getElementById(elementId);

  if (element) {
    event.preventDefault();
    element.scrollIntoView(scrollOptions);
  }
};

const attachScrollHandler = (hash: string) => {
  const footnotes = getHtmlCollection("footnote-ref");
  const bottomFootnotes = getHtmlCollection("footnote-backref");
  for (let i = 0; i < footnotes.length; i++) {
    footnotes[i].onclick = scrollHandler;
  }
  for (let i = 0; i < bottomFootnotes.length; i++) {
    bottomFootnotes[i].onclick = scrollHandler;
  }

  let possibleScrollPoint = hash && hash.slice(1, hash.length);
  if (possibleScrollPoint && possibleScrollPoint.endsWith("/")) {
    possibleScrollPoint = possibleScrollPoint.substring(0, possibleScrollPoint.length - 1);
  }

  let possibleScrollElem = document.getElementById(possibleScrollPoint);
  if (!possibleScrollElem) {
    possibleScrollElem = document.getElementById(`#${possibleScrollPoint}`);
  }

  if (possibleScrollElem) {
    possibleScrollElem.scrollIntoView(scrollOptions);
  }
};

const useScrollHandler = (location: Location) => {
  const hash = location ? location.hash : "";
  return useEffect(() => {
    attachScrollHandler(hash);
  }, [hash]);
};

export { genericScrollHandler, useScrollHandler };
