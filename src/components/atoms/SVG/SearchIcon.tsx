import React from "react";

const SearchIcon = ({ size }: { size?: number }) => {
  return (
    <svg
      className="fill-current"
      xmlns="http://www.w3.org/2000/svg"
      width={size || 22}
      height={size || 22}
      viewBox="0 0 256 256"
    >
      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
    </svg>
  );
};

export default SearchIcon;
