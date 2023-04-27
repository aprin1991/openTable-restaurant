import React, { useCallback, useMemo } from "react";

const Header = ({ name }: { name: String }) => {
  const renderTitle = useMemo(() => {
    const title = name.split("-");
    title[title.length - 1] = `(${title[title.length - 1]})`;
    return title.join("  ");
  }, [name]);

  return (
    <div className="h-96 overflow-hidden">
      <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
        <h1 className="text-7xl text-white captitalize text-shadow text-center">
          {renderTitle}
        </h1>
      </div>
    </div>
  );
};

export default Header;
