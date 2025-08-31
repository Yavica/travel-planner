import React from "react";

const Filter = ({ filter, setFilter }) => {
  return (
    <select
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      className="border p-2 rounded mb-4"
    >
      <option value="all">All Users</option>
      <option value="admins">Admins</option>
      <option value="non-admins">Non-Admins</option>
    </select>
  );
};

export default Filter;
