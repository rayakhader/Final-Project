
function LoadingState({ columnsCount }: { columnsCount: number }) {
    return (
        <>
            {[...Array(5)].map((_, rowIdx) => (
                <tr key={rowIdx}>
                    {Array(columnsCount + 1)
                        .fill(null)
                        .map((_, colIdx) => (
                            <td key={colIdx} style={{ padding: "10px" }}>
                                <div style={{ height: "16px", backgroundColor: "#eee", borderRadius: "4px" }} />
                            </td>
                        ))}
                </tr>
            ))}
        </>
    )
}

export default LoadingState
