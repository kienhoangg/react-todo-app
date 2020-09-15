import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.css";
export default class App extends Component {
  state = {
    item: "",
    items: [
      {
        id: 1,
        name: "wake up",
      },
      {
        id: 2,
        name: "make breakfast",
      },
    ],
    isEdit: false,
  };
  handleChange = (e) => {
    console.log("input change");
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit clicked");
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-6 mx-auto col-md-8 mt-4">
            <h3 className="text-center">Todo Input</h3>
            <TodoInput
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              isEdit={this.state.isEdit}
              item={this.state.item}
            />
          </div>
        </div>

        <TodoList />
      </div>
    );
  }
}
