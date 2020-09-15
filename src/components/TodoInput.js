import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { handleChange, handleSubmit, isEdit, item } = this.props;
    return (
      <form onSubmit={handleSubmit} className="card card-body text-center">
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-primary">
              <i className="fas fa-book text-white"></i>
            </div>
          </div>
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            placeholder="Add Todo Item"
          />
          <button type="submit" className="btn-block btn btn-info mt-3">
            Add Item
          </button>
        </div>
      </form>
    );
  }
}
