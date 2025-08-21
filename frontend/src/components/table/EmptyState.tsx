import React from 'react'

function EmptyState({columnsCount}:{columnsCount:number}) {
    return (
        <tr>
            <td colSpan={columnsCount + 1} style={{ textAlign: "center", padding: "20px" }}>
                <p>No data found.</p>
                <p style={{ color: "#888" }}>Try adding some rows first.</p>
            </td>
        </tr>
    )
}

export default EmptyState
