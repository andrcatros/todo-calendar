import React, { useState } from "react";
import moment from "moment";

import Main from "../components/main";

import GlobalStyle from "../styles/global-style";

function App() {
  const [date, setDate] = useState({ dateObject: moment() });

  return (
    <div className="App">
      <GlobalStyle />

      <Main date={date} />
    </div>
  );
}

export default App;
