import React from "react";
import "../App.css";

type CardType = {
  id: string;
  colour: string;
};

export const Card: React.FC<CardType> = ({ id, colour }) => (
  <div
    key={id}
    className="card card-item"
    style={{ backgroundColor: colour }}
  />
);
