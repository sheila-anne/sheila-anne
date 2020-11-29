import React from "react";

type YoutubeProps = {
  url: String;
};

export const Youtube = ({ url }: YoutubeProps) => (
  <iframe
    width="100%"
    height="315"
    src={`https://www.youtube-nocookie.com/embed/${url}?rel=0`}
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
);
