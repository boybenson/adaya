import React from "react";

interface Props {
  pageSize: number;
  setPageSize: Function;
}

const SelectPageSize: React.FC<Props> = ({ pageSize, setPageSize }) => {
  return (
    <div className="">
      <select
        className="border border-gray-300 w-36 p-2"
        value={pageSize}
        onChange={(e) => {
          setPageSize(Number(e.target.value));
        }}
      >
        {[5, 10, 20, 30, 40, 50, 100].map((pageSizeNumber) => (
          <option
            key={pageSizeNumber}
            value={pageSizeNumber}
            selected={pageSize === pageSizeNumber}
          >
            Show {pageSizeNumber}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectPageSize;
