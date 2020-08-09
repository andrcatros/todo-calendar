import React from "react";
import moment from "moment";

import DayTile from "./day-tile";
import StyledTableHead from "../styles/table-head-style";

const Calendar = (props) => {
  const weekdayshortname = moment.weekdaysShort();

  return (
    <div className="Calendar">
      {console.log(weekdayshortname)}
      <h3>Calendar</h3>
      <StyledTableHead
        style={{
          display: "flex",
          flexDirection: "rows",
        }}
      >
        {moment.weekdaysShort().map((day) => (
          <th id="cell" style={{ borderStyle: "solid" }}>
            {" "}
            {day}{" "}
          </th>
        ))}
      </StyledTableHead>
      <DayTile day={0} />
    </div>
  );
};

export default Calendar;
