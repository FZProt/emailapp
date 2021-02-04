import SearchField from "react-search-field";
import React, { useState } from 'react';

const Searchbar = () => {
  const [stext, setStext] = useState("");
  return (
    <SearchField
      placeholder="Search..."
      onChange={
        setStext("p")
      }
      searchText="This is initial search text"
      classNames="test-class"
    />
  );
};

export default Searchbar;
