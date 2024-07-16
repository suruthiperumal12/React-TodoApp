import { useState } from "react";
import Header from "./components/Header";
import Todoapp from "./components/Todoapp";

function App() {
  return (
    <div className="App">
      <Header />
      <Todoapp />
    </div>
  );
}

export default App;
