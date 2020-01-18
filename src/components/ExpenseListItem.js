import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const ExpenseListItem = ({ id, description, amount, createdAt }, props) => (
  <div>
    <h3>{description}</h3>

    <p>
      {amount}-{createdAt}
      <Link to={`/edit/${id}`}>
        <button>Edit</button>
      </Link>
    </p>
  </div>
);

export default connect()(ExpenseListItem);
