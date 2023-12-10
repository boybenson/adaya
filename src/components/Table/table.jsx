import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { useState } from "react";
import { useAsyncDebounce } from "react-table";
import { RotateSpinner } from "react-spinners-kit";
import { InformationCircleIcon } from "@heroicons/react/outline";
import PaginationBar from "./PaginationBar";

const Table = ({ columns, data, loading = false, selfPagination = false }) => {
  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 100 },
      manualPagination: selfPagination,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state: { globalFilter, pageSize, pageIndex },
    setGlobalFilter,

    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
  } = tableInstance;

  return (
    <div className="w-full">
      <div className="sm:hidden flex items-center bg-blue-300 text-blue-500 p-2 mt-5 no-print">
        <InformationCircleIcon className="h-6 w-6 mr-4" />
        <span>Please Swipe left to see the remaining fields</span>
      </div>
      <div className="flex w-full justify-between items-center my-3 sm:rounded-lg no-print">
        <PaginationBar
          canNextPage={canNextPage}
          canPreviousPage={canPreviousPage}
          gotoPage={gotoPage}
          nextPage={nextPage}
          pageCount={pageCount}
          pageIndex={pageIndex}
          pageOptions={pageOptions}
          pageSize={pageSize}
          previousPage={previousPage}
          setPageSize={setPageSize}
        />
        <GlobalFilter
          setGlobalFilter={setGlobalFilter}
          globalFilter={globalFilter}
        />
      </div>
      <div className="flex flex-col w-full">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 dark:border-gray-200 sm:rounded-none">
              <table
                className="min-w-full divide-y divide-gray-200"
                {...getTableProps({
                  className: "min-w-full w-full divide-y divide-gray-200",
                })}
              >
                <thead className="bg-gray-50">
                  {headerGroups.map((headerGroup) => (
                    <tr
                      {...headerGroup.getHeaderGroupProps({
                        className:
                          "px-3 py-3 text-left text-xs font-medium text-gray-500  tracking-wider",
                      })}
                    >
                      {headerGroup.headers.map((column) => (
                        // Apply the header cell props
                        <th
                          {...column.getHeaderProps(
                            column.getSortByToggleProps({
                              className:
                                "px-3 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider",
                            })
                          )}
                        >
                          <span className="flex items-center">
                            {
                              // Render the header
                              column.render("Header")
                            }
                            {/* <SwitchVerticalIcon className="w-4 no-print" /> */}
                          </span>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody
                  {...getTableBodyProps({
                    className: "bg-white divide-y divide-gray-200",
                  })}
                >
                  {
                    // Loop over the table rows
                    page.map((row) => {
                      // Prepare the row for display
                      prepareRow(row);
                      return (
                        // Apply the row props
                        <tr
                          {...row.getRowProps({
                            className: "odd:bg-gray-50 hover:odd:bg-gray-100",
                          })}
                        >
                          {
                            // Loop over the rows cells
                            row.cells.map((cell) => {
                              // Apply the cell props
                              return (
                                <td
                                  {...cell.getCellProps({
                                    className: "px-3 py-4 whitespace-nowrap",
                                  })}
                                >
                                  {
                                    // Render the cell contents
                                    cell.render("Cell")
                                  }
                                </td>
                              );
                            })
                          }
                        </tr>
                      );
                    })
                  }
                </tbody>
              </table>
              {!loading && data.length < 1 && (
                <div className="flex justify-center items-center h-full">
                  <div className="text-center text-gray-500">
                    <p className="text-xl">No data found</p>
                  </div>
                </div>
              )}
              {loading ? (
                <div className="flex justify-center items-center h-52 w-full p-6">
                  <RotateSpinner size={40} color="#1A494D" />
                </div>
              ) : null}
              {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
              <nav
                className="bg-gray-50 px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
                aria-label="Pagination"
              >
                {/* <PaginationBar
                    canNextPage={canNextPage}
                    canPreviousPage={canPreviousPage}
                    gotoPage={gotoPage}
                    nextPage={nextPage}
                    pageCount={pageCount}
                    pageIndex={pageIndex}
                    pageOptions={pageOptions}
                    pageSize={pageSize}
                    previousPage={previousPage}
                    setPageSize={setPageSize}
                  /> */}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;

const TWO_HUNDRED_MS = 200;

function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, TWO_HUNDRED_MS);

  return (
    <input
      value={value || ""}
      onChange={(e) => {
        setValue(e.target.value);
        onChange(e.target.value);
      }}
      placeholder={`Search`}
      className="p-2 border border-gray-300 rounded-md ml-2 w-full"
    />
  );
}
