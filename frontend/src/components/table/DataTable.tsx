import React, { useState } from "react";
import LoadingState from "./LoadingState";
import EmptyState from "./EmptyState";
import { DataTableProps, ShowMore } from "./table.types";

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
    <table style={{ width: "100%", marginTop: "2rem", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          {columns.map((col, idx) => (
            <th
              key={idx}
              style={{
                textAlign: "left",
                fontWeight: "500",
                padding: "10px",
                color: "#555",
                borderBottom: "1px solid #ccc",
              }}
            >
              {col.header}
            </th>
          ))}
          <th style={{ padding: "10px", color: "#555", borderBottom: "1px solid #ccc" }}>
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {isLoading ? (
         <LoadingState columnsCount={columns.length} />
        ) : data.length === 0 ? (
          <EmptyState columnsCount={columns.length}/>
        ) : (
          data.map((row, rowIdx) => (
            <tr key={row.id}>
              {columns.map((col, colIdx) => {
                const content =
                  typeof col.accessor === "function"
                    ? col.accessor(row)
                    : (row[col.accessor] as any);

                const isLong = typeof content === "string" && content.length > 100;

                return (
                  <td key={colIdx} style={{ padding: "10px", verticalAlign: "top" }}>
                    <div style={{ display: "flex", alignItems: "flex-start" }}>
                      <span style={{ flexGrow: 1 }}>
                        {content}
                      </span>
                      {colIdx === 1 && isLong && (
                        <button
                          onClick={() => handleShowHide(rowIdx)}
                          style={{
                            background: "none",
                            border: "none",
                            color: "#888",
                            cursor: "pointer",
                            marginLeft: "5px",
                          }}
                        >
                          {showMore[rowIdx] ? "▲" : "▼"}
                        </button>
                      )}
                    </div>
                  </td>
                );
              })}
              <td style={{ padding: "10px" }}>
                <button
                  onClick={() => onOpenEditDialog(row.id)}
                  style={{
                    backgroundColor: "transparent",
                    color: "#2c3e50",
                    marginRight: "8px",
                    cursor: "pointer",
                  }}
                  title="Edit"
                >
                  ✏️
                </button>
                <button
                  onClick={() => onOpenConfirmDeleteDialog(row.id)}
                  style={{
                    backgroundColor: "transparent",
                    color: "#e74c3c",
                    cursor: "pointer",
                  }}
                  title="Delete"
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default DataTable;
