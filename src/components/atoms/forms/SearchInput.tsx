import React, { ChangeEventHandler } from "react";
interface Props {
  placeHolder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const SearchInput = ({ placeHolder, value, onChange }: Props) => {
  return (
    <input
      type="search"
      onChange={onChange}
      value={value}
      placeholder={placeHolder}
      className="input input-bordered input-md w-full rounded-r-none"
    />
  );
};

export default SearchInput;
