import React, { useState } from "react";

export const Input: React.FC<{ value: number; onChange: Function }> = ({
  value,
  onChange,
}) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num = Number(e.target.value);
    if (!isNaN(num)) {
      onChange(num);
    }
  };

  return (
    <div className="form-floating">
      <input
        id="numberInput"
        className="form-control"
        type="text"
        value={value}
        onChange={handleChange}
      />
      <label htmlFor="numberInput" className="form-label">
        Interval in secods
      </label>
    </div>
  );
};
