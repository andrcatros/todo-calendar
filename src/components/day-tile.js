import React from "react";

const DayTile = ({ day }) => {
  if (day === "x") {
    return (
      <div
        clasName="DayTile"
        style={{
          width: "150px",
          height: "150px",
          borderStyle: "solid",
          color: "gray",
          backgroundColor: "silver",
        }}
      >
        {"    "}
      </div>
    );
  } else {
    return (
      <div
        className="DayTile"
        style={{ width: "150px", height: "150px", borderStyle: "solid" }}
      >
        {day}
      </div>
    );
  }
};

export default DayTile;
