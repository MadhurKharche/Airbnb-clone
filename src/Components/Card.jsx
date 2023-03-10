import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
      <img
        className="card--img"
        src={`/images/${props.coverImg}`}
        alt="UserImg"
      />
      <div>
        <img className="card--star" src="/images/star.png" alt="Star" />
        <span> {props.stats.rating}</span>
        <span>({props.stats.reviewCount}) • </span>
        <span>{props.location}</span>
      </div>
      <p>{props.title}</p>
      <div>
        <span>
          <strong>From ${props.price}</strong>
        </span>
        / person
      </div>
    </div>
  );
}
