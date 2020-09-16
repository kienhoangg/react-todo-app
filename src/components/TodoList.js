import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const { items, handleDelete, handleReset, handleEdit } = this.props;
    return (
      <ul className="list-group my-4">
        <h3 className="text-center">Todo List</h3>
        {items.map((item) => {
          return (
            <TodoItem
              todo={item}
              key={item.id}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}

        <button
          onClick={handleReset}
          type="submit"
          className="btn btn-block btn-danger"
        >
          Clear List
        </button>
      </ul>
    );
  }
}
