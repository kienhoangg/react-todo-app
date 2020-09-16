import React from "react";

export default function TodoItem(props) {
  const { name } = props.todo;
  const { handleDelete, handleEdit } = props;
  return (
    <li className="list-group-item text-capitalize d-flex justify-content-between mb-2">
      <h6>{name}</h6>

      <div className="right-icon">
        <span className="mx-2 text-success" onClick={handleEdit}>
          <i className="fas fa-pen" />
        </span>
        <span className="mx-2 text-danger" onClick={handleDelete}>
          <i className="fas fa-trash" />
        </span>
      </div>
    </li>
  );
}
