import Router from "./Shared/Router";
import React from "react";

const App = () => {
  if (1 === 1) {
    console.log = function no_console() {};
    console.warn = function no_console() {};
  }
  return (
    <div>
      <Router />
    </div>
  );
};

export default App;
