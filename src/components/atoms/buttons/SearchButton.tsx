import React, { MouseEventHandler, ReactNode } from "react";
interface Props {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const SearchButton = ({ children, onClick }: Props) => {
  return (
    <button onClick={onClick} className="btn rounded-l-none">
      {children}
    </button>
  );
};

export default SearchButton;
