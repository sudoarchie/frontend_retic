import React from "react";
import Link from "next/link";

interface RowData {
  [key: string]: string;
}

interface TableData {
  rows: RowData[];
  className?: string;
  deleteOption?: boolean;
}

const TableField: React.FC<TableData> = ({
  rows,
  deleteOption,
  className = "",
}) => {
  if (rows.length === 0) {
    return null;
  }

  const headers = Object.keys(rows[0]);

  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <div
      className={`relative flex flex-col w-full h-full overflow-auto text-slate-300 bg-slate-800 shadow-md rounded-lg bg-clip-border ${className}`}
    >
      <table className="w-full text-left table-auto min-w-max">
        <thead>
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="p-4 border-b border-slate-600 bg-slate-700"
              >
                <p className="text-sm font-normal leading-none text-slate-300">
                  {header}
                </p>
              </th>
            ))}
            {deleteOption ? (
              <th className="p-4 border-b border-slate-600 bg-slate-700">
                <p className="text-sm font-normal leading-none text-slate-300">
                  Delete
                </p>
              </th>
            ) : undefined}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr className="even:bg-slate-900 hover:bg-slate-700" key={rowIndex}>
              {headers.map((header) => (
                <td
                  key={`${rowIndex}-${header}`}
                  className="p-4 border-b border-slate-700"
                >
                  <p className="text-sm text-slate-100 font-semibold">
                    {isValidUrl(row[header]) ? (
                      <Link
                        href={row[header]}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open Link
                      </Link>
                    ) : (
                      row[header]
                    )}
                  </p>
                </td>
              ))}
              {deleteOption ? (
                <td className="p-4">
                  {" "}
                  <Link href={""} className="">
                    {" "}
                    Delete
                  </Link>{" "}
                </td>
              ) : undefined}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableField;
