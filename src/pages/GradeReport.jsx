import { Fragment } from "react";
import { ArrowUpCircleIcon } from "@heroicons/react/20/solid";

const days = [
  {
    date: "First Semester",
    dateTime: "2023-03-22",
    transactions: [
      {
        id: 1,
        courseName: "Web Design Development",
        courseCode: "DCIT 205",
        icon: ArrowUpCircleIcon,
        grade: "F",
      },
      {
        id: 2,
        courseName: "Web Design Development",
        courseCode: "DCIT 205",
        icon: ArrowUpCircleIcon,
        grade: "F",
      },
      {
        id: 3,
        courseName: "Web Design Development",
        courseCode: "DCIT 205",
        icon: ArrowUpCircleIcon,
        grade: "F",
      },
    ],
  },
];

export default function GradeReport() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-3">
        <h2 className="mx-auto max-w-2xl text-xl font-bold leading-6 mt-4 text-gray-900 lg:mx-0 lg:max-w-none">
          Student Academic Record
        </h2>
      </div>
      <div className="mt-6 overflow-hidden border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <table className="w-full text-left">
              <thead className="sr-only">
                <tr>
                  <th>Amount</th>
                  <th className="hidden sm:table-cell">Client</th>
                  <th>More details</th>
                </tr>
              </thead>
              <tbody>
                {days.map((day) => (
                  <Fragment key={day.dateTime}>
                    <tr className="text-sm leading-6 text-gray-900">
                      <th
                        scope="colgroup"
                        colSpan={3}
                        className="relative isolate py-2 font-semibold"
                      >
                        <time dateTime={day.dateTime}>{day.date}</time>
                        <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-50" />
                        <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-50" />
                      </th>
                    </tr>
                    {day.transactions.map((transaction) => (
                      <tr key={transaction.id}>
                        <td className="relative py-5 pr-6">
                          <div className="flex gap-x-6">
                            <transaction.icon
                              className="hidden h-6 w-5 flex-none text-gray-400 sm:block"
                              aria-hidden="true"
                            />
                            <div className="flex-auto">
                              <div className="flex items-start gap-x-3">
                                <p className="text-sm font-medium leading-6 text-gray-900">
                                  {transaction?.courseName}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="absolute bottom-0 right-full h-px w-screen bg-gray-100" />
                          <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
                        </td>
                        <td className="hidden py-5 pr-6 sm:table-cell">
                          <div className="mt-1 text-lg leading-5 text-gray-600">
                            {transaction?.courseCode}
                          </div>
                        </td>
                        <td className="py-5 text-right">
                          <div className="mt-1 text-xs leading-5 text-gray-500">
                            <span className="text-gray-900 text-xl font-bold">
                              {transaction?.grade}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
