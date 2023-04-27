"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSearch = () => {
    if (search.trim()) {
      router.push(`search?city=${search}`);
    }
  };

  return (
    <div className="text-left text-lg py-3 m-auto flex justify-center">
      <input
        className="rounded  mr-3 p-2 w-[450px]"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="State, city or town"
      />
      <button
        onClick={handleSearch}
        className="rounded bg-red-600 px-9 py-2 text-white"
      >
        {"Let's go"}
      </button>
    </div>
  );
};

export default SearchBar;
