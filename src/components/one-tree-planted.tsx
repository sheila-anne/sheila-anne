import React from "react";

import { BannerLink } from "./banner-link";
import { CenteredText } from "./centered";

export const OneTreePlanted = () => (
  <CenteredText>
    <h2>One Tree Planted 🌲</h2>
    Our work together creates a ripple of impact! One tree is planted for you when you successfully complete one Sheila
    Anne program. Learn more about the work of one tree planted{" "}
    <BannerLink to="https://onetreeplanted.org/" title="One Tree Planted">
      here
    </BannerLink>
    .
  </CenteredText>
);
