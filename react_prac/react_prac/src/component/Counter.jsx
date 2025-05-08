import React, { useState } from "react";

const SmartCounter = () => {
  const [value, setValue] = useState(0);

  const getColorClass = () => {
    if (value > 0) return "text-success";
    if (value < 0) return "text-danger";
    return "text-secondary";
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <div className="col-md-5">
        <div className="card border-0 shadow rounded-4 p-4 text-center bg-light">
          <h3 className="text-dark mb-3">Dynamic Counter</h3>
          <h1 className={`fw-bold ${getColorClass()}`}>{value}</h1>

          <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
            <button
              onClick={() => setValue((prev) => prev + 1)}
              className="btn btn-outline-success px-4 py-2"
            >
              + Add
            </button>
            <button
              onClick={() => setValue((prev) => prev - 1)}
              className="btn btn-outline-danger px-4 py-2"
            >
              - Subtract
            </button>
            <button
              onClick={() => setValue(0)}
              className="btn btn-outline-warning px-4 py-2"
            >
              ⭯ Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartCounter;
