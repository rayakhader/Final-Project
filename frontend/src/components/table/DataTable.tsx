import { JSX, useState } from "react";
import { DataTableProps, ShowMore } from "./table.types";
import LoadingState from "./LoadingState";
import EmptyState from "./EmptyState";
import { MdDelete, MdEdit } from "react-icons/md";

function DataTable<T extends { id: number }>({
  columns,
  data,
  onOpenEditDialog,
  onOpenConfirmDeleteDialog,
  isLoading,
}: DataTableProps<T>) {
  const [showMore, setShowMore] = useState<ShowMore>({});

  const handleShowHide = (idx: number) => {
    setShowMore((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((col, idx) => (
              <th
                key={idx}
                className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b"
              >
                {col.header}
              </th>
            ))}
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <LoadingState columnsCount={columns.length} />
          ) : data.length === 0 ? (
            <EmptyState columnsCount={columns.length} />
          ) : (
            data.map((row, rowIdx) => (
              <tr key={row.id} className="bg-white even:bg-gray-50 hover:bg-gray-100 transition-all">
                {columns.map((col, colIdx) => {
                  const content =
                    typeof col.accessor === "function"
                      ? col.accessor(row)
                      : (row[col.accessor] as any);

                  const isLong = typeof content === "string" && content.length > 100;

                  return (
                    <td key={colIdx} className="px-6 py-4 text-sm text-gray-700 align-top">
                      <div className="flex items-center">
                        <span>
                          {isLong && !showMore[rowIdx] ? `${content.slice(0, 100)}...` : content}
                        </span>
                        {colIdx === 2 && isLong && (
                          <button
                            onClick={() => handleShowHide(rowIdx)}
                            className="text-xs text-blue-600 hover:underline"
                          >
                            {showMore[rowIdx] ? "Show less" : "Show more"}
                          </button>
                        )}
                      </div>
                    </td>
                  );
                })}
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => onOpenEditDialog(row.id)}
                      className="text-blue-600 hover:text-blue-800 transition"
                      title="Edit"
                    >
                      {MdEdit({ size: 18 }) as JSX.Element}
                    </button>
                    <button
                      onClick={() => onOpenConfirmDeleteDialog(row.id)}
                      className="text-red-600 hover:text-red-800 transition"
                      title="Delete"
                    >
                      {MdDelete({ size: 18 }) as JSX.Element}
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
export default DataTable