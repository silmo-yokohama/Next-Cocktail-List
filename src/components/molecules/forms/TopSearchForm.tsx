"use client";
import SearchIcon from "@/components/atoms/SVG/SearchIcon";
import SearchButton from "@/components/atoms/buttons/SearchButton";
import SearchInput from "@/components/atoms/forms/SearchInput";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface Props {
  searchText?: string | null;
}

const TopSearchForm = ({ searchText }: Props) => {
  const [searchInput, setSearchInput] = useState(searchText || "");
  const router = useRouter();
  const onChange = (e: any) => {
    setSearchInput(e.target.value);
  };

  const onClick = (e: any) => {
    e.preventDefault();
    if (!searchInput) return;

    router.push(`/search?word=${searchInput}`);
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
