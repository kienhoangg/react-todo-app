import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    return (
      <div>
        This is todo list <TodoItem />
      </div>
    );
  }
}
