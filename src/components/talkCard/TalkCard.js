import React from "react";
import "./TalkCard.scss";

export default function TalkCard() {
  return (
    <div className="talk-card-image">
      <img
        src={require("../../assets/images/me.jpg")}
        alt="Talk"
      />
    </div>
  );
}
