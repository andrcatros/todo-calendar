import React from "react";
import Main from "../components/main";

import "../styles/App.css";
import GlobalStyle from "../styles/global-style";

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <Main />
    </div>
  );
}

export default App;
