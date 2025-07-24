import React from "react";

export const Button: React.FC<{ label: string; onButtonClick: () => void; buttonType?: string}> = ({
  label,
  onButtonClick,
  buttonType = "success"
}) => {


  return <button  type="button" className={`btn btn-${buttonType}`} onClick={onButtonClick}>{label}</button>;
};
