import React from "react";
import moment from "moment";

import DayTile from "./day-tile";
import getCalendarGrid from "./getCalendarGrid";

const Calendar = ({ date }) => {
  const grid = getCalendarGrid(date);
  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Say", "Sun"];

  // generate day tiles

  return (
    <div
      className="calendar"
      style={{ padding: "50px", display: "flex", flexDirection: "column" }}
    >
      <div className="calendar-month">
        <h2>{moment(date).format("MMMM YYYY")}</h2>
      </div>
      <div
        className="calendar-head"
        style={{
          display: "flex",
          flexDirection: "row",
          textAlign: "center",
          paddingBottom: "10px",
        }}
      >
        {weekdays.map((d) => (
          <div style={{ width: "150px" }} key={d}>
            {d}
          </div>
        ))}
      </div>
      <div
        className="calendar-body"
        style={{
          borderStyle: "solid",
          borderWidth: "thin",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {grid.map((row) => (
          <div
            className="calendar-row"
            style={{ display: "flex", flexDirection: "row" }}
          >
            {row.map((day, i) => (
              <DayTile day={day} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
