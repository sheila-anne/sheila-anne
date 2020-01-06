import React from "react";
import styled from "styled-components";

const ColorPreview = styled.span`
  background-color: ${({ color }) => color};
  display: inline-block;
  height: 20px;
  width: 50px;
  margin-left: 10px;
`;

const ColorsPreview = ({ entry }) => {
  const colors = entry.toJS().data;
  return (
    <div>
      <h1>Colors</h1>
      {Object.keys(colors).map((key, index) => {
        const color = colors[key];
        return (
          <div key={index}>
            <div style={{ display: "inline" }}>{key}</div>
            <ColorPreview color={color} />
          </div>
        );
      })}
    </div>
  );
};

export default ColorsPreview;
