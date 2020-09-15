import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <div className="container">
      <div className="row">
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
