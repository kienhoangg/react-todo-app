import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.css";
import { v4 as uuid } from "uuid";
export default class App extends Component {
  state = {
    item: "",
    items: [],
    isEdit: false,
    id: uuid(),
  };
  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };
  handleEdit = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    const foundItem = this.state.items.find((item) => item.id === id);
    this.setState({
      items: filteredItems,
      item: foundItem.name,
      isEdit: true,
    });
  };
  handleDelete = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: filteredItems,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      name: this.state.item,
    };

    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: "",
      id: uuid(),
      isEdit: false,
    });
  };
  handleReset = () => {
    this.setState({
      items: [],
      isEdit: false,
      item: "",
      id: uuid,
    });
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
            <TodoList
              items={this.state.items}
              handleDelete={this.handleDelete}
              handleReset={this.handleReset}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}
