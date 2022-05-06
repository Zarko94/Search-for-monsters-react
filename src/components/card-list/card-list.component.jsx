import React from "react";
import "./CardList.css";
import Card from "../card/Card";

function CardList(props) {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => {
        return <Card key={monster.name} monsters={monster} />;
      })}
    </div>
  );
}

export default CardList;
