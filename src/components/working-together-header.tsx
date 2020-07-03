import React from "react";
import styled from "styled-components";

import { Constants } from "../constants";

const WorkingTogetherSections = [
  { name: "Exploration Call", href: "exploration-call" },
  { name: "Ground To Grow Accelerator", href: "ground-to-grow" },
  { name: "Root To Rise", href: "root-to-rise" },
];

const ListContainer = styled.ol`
  justify-content: space-around;
  display: flex;

  @media (max-width: ${Constants.mobileWidth}) {
    display: block;
    text-align: center;
  }
`;

const WorkingTogetherAnchor = styled.a`
  text-decoration: none;
`;

const NonTreeListItem = styled.li`
  border: 1px solid ${Constants.Colors.theGroveGreen};
  border-radius: 1rem;
  margin-top: 1rem;
  padding-right: 1.5rem;
  &::before {
    background-image: unset !important;
  }
`;

export const WorkingTogetherHeader = () => {
  return (
    <>
      <h1>Working Together</h1>
      <div>
        Here are the ways I am working together with clients to cultivate a
        mind-body connection, tap into what they truly desire, and create an
        inspiring & aligned future:
      </div>
      <header>
        <nav>
          <ListContainer>
            {WorkingTogetherSections.map((item) => (
              <WorkingTogetherAnchor
                href={`#${item.href}`}
                key={item.name}
                title={item.name}
              >
                <NonTreeListItem>{item.name}</NonTreeListItem>
              </WorkingTogetherAnchor>
            ))}
          </ListContainer>
        </nav>
      </header>
    </>
  );
};
