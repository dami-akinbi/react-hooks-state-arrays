import React from "react";
import SpicyFoodList from "./SpicyFoodList";

function App() {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        margin: "auto",
        maxWidth: "400px",
        marginTop: "2em",
        backgroundColor: "whitesmoke",
        padding: "1em",
        textAlign: "center",
      }}
    >
      <h3>SpicyFoodList</h3>
      <SpicyFoodList />
    </div>
  );
}

export default App;
