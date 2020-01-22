import React, { FC } from "react";

type EmojiProps = {
  label: string;
  symbol: string;
};

const Emoji: FC<EmojiProps> = ({ label, symbol }) => (
  <span
    role="img"
    aria-label={label ? label : ""}
    aria-hidden={label ? "false" : "true"}
    title={label ? label : ""}
  >
    {symbol}
  </span>
);

export { Emoji };
