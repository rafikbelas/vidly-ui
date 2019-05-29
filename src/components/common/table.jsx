import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

// interface
// columns, sortColumn, data, onSort

const Table = props => {
  const { columns, sortColumn, data, onSort } = props;
  return (
    <table className="table">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />

      <TableBody columns={columns} data={data} />
    </table>
  );
};

export default Table;