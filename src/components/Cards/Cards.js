import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cards.module.scss";

const Cards = ({ results, page }) => {
  let display;
  console.log(results);

  if (results) {
    display = results.map((result) => {
      let { id, name, image, location, status } = result;

      let badgeType;

      if (result.status === "Alive") {
        badgeType = "success";
      } else if (result.status === "Dead") {
        badgeType = "danger";
      } else {
        badgeType = "secondary";
      }

      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          key={id}
          className="col-lg-4 col-md-6 col-12 mb-4 position-relative text-dark"
        >
          <div
            className={`${styles.cards} d-flex flex-column justify-content-center`}
          >
            <img src={image} alt="" className={`${styles.img} img-fluid`} />
            <div style={{ padding: "10px" }} className="content">
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6">Last location</div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>
          </div>
          <div
            className={`${styles.badge} badge bg-${badgeType} position-absolute`}
          >
            {status}
          </div>
        </Link>
      );
    });
  } else {
    display = "No characters found! :(";
  }

  return <>{display}</>;
};

export default Cards;
