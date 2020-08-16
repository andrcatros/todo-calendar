const moment = require("moment");

const getCalendarGrid = (date) => {
  const firstDay = moment(date).startOf("month").format("d");

  let rows = [[], [], [], [], [], []];

  const getStartRow = () => {
    const startBlanks = firstDay - 1;

    for (let d = 0; d < startBlanks; d++) {
      rows[0].push("x");
    }
    for (let i = 1; 7 > rows[0].length; i++) {
      rows[0].push(i);
    }
  };

  getStartRow();

  const getMiddleRows = () => {
    for (let i = rows[0][6] + 1; 7 > rows[1].length; i++) {
      rows[1].push(i);
    }

    for (let j = rows[1][6] + 1; 7 > rows[2].length; j++) {
      rows[2].push(j);
    }

    for (let k = rows[2][6] + 1; 7 > rows[3].length; k++) {
      rows[3].push(k);
    }
  };

  getMiddleRows();

  const getFinalRows = () => {
    const daysNum = moment(date).daysInMonth();

    for (let i = rows[3][6] + 1; i < daysNum; i++) {
      rows[4].push(i);
    }

    for (let l = 0; 7 < rows[4].length; l++) {
      rows[4].push("x");
    }

    if (rows[4][6] !== "x") {
      for (let m = rows[4][6] + 1; m < daysNum + 1; m++) {
        rows[5].push(m);
      }

      for (let n = 0; rows[5].length < 7; n++) {
        rows[5].push("x");
      }
    }
  };

  getFinalRows();

  return rows;
};

export default getCalendarGrid;
