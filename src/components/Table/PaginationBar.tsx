import React from "react";
import SelectPageSize from "./SelectPageSize";

interface Props {
  pageSize: number;
  pageIndex: number;
  pageOptions: any;
  canNextPage: boolean;
  canPreviousPage: boolean;
  pageCount: number;
  setPageSize: Function;
  gotoPage: (page: number) => void;
  previousPage: Function;
  nextPage: Function;
}

const PaginationBar: React.FC<Props> = (props) => {
  const {
    pageSize,
    setPageSize,
    pageIndex,
    pageOptions,
    canNextPage,
    canPreviousPage,
    gotoPage,
    nextPage,
    pageCount,
    previousPage,
  } = props;

  return (
    <div className="hidden sm:flex sm:space-x-10   sm:items-center">
      <SelectPageSize pageSize={pageSize} setPageSize={setPageSize} />

      <p className="text-sm text-gray-700 my-0">
        Showing
        <span className="font-medium mx-2">{pageSize * pageIndex + 1}</span>
        to
        <span className="font-medium mx-2">
          {pageSize * pageIndex + pageSize}
        </span>
        of
        <span className="font-medium mx-2">
          {pageSize * pageOptions.length}
        </span>
        results
      </p>

      {/* <span>
        Go to page:{" "}
        <input
          type="number"
          defaultValue={pageIndex + 1}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(page);
          }}
          style={{ width: "100px" }}
          className="p-2 border border-gray-300"
        />
      </span> */}

      <div className="flex-1 flex sm:justify-end space-x-2">
        <button
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
          className="relative disabled:cursor-not-allowed disabled:bg-gray-50 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          First
        </button>
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className="relative disabled:cursor-not-allowed disabled:bg-gray-50 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Previous
        </button>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className="relative disabled:cursor-not-allowed disabled:bg-gray-50 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Next
        </button>
        <button
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
          className="relative disabled:cursor-not-allowed disabled:bg-gray-50 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Last
        </button>
      </div>
    </div>
  );
};

export default PaginationBar;
