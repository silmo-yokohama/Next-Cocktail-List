"use client";
import SearchIcon from "@/components/atoms/SVG/SearchIcon";
import SearchButton from "@/components/atoms/buttons/SearchButton";
import SearchInput from "@/components/atoms/forms/SearchInput";
import React, { ChangeEvent, useState } from "react";

const TopSearchForm = () => {
  const [searchInput, setSearchInput] = useState("");
  const onChange = (e: any) => {
    setSearchInput(e.target.value);
  };

  const onClick = (e: any) => {
    e.preventDefault();

    console.log(searchInput);
  };

  return (
    <div className="flex w-full items-center">
      <SearchInput
        placeHolder="検索ワードを入力"
        value={searchInput}
        onChange={onChange}
      />
      <SearchButton onClick={onClick}>
        <SearchIcon />
      </SearchButton>
    </div>
  );
};

export default TopSearchForm;
