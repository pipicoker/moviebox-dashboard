
interface TableProps {
    columns: { title: string; key: string }[]; 
    data: Record<string, any>[]
    hasPopularity: boolean
}
const Table: React.FC<TableProps> = ({columns, data, hasPopularity}) => {

    const columnWidths: { [key: string]: string } = {
        'Name': 'w-3/12',       // 16.67% width
        'Category': 'w-2/12',   // 16.67% width
        'Watchlists': 'w-2/12', // Smallest width (8.33%)
        'Owner': 'w-2/12',      // 16.67% width
        'Streams': 'w-2/12',      // 16.67% width
        'PremierDate': 'w-3/12' ,// Widest column (41.67%)
        'ReleaseDate': 'w-3/12' ,// Widest column (41.67%)
      };

      // Adjust widths only if 'Popularity' is present
    if (hasPopularity) {
        columnWidths['Popularity'] = 'w-2/12'; // Add Popularity column
        columnWidths['Watchlists'] = 'w-1/12';  // Reduce width to 8.33% for Watchlists
        columnWidths['Streams'] = 'w-1/12';     // Reduce width to 8.33% for Streams
        columnWidths['Owner'] = 'w-1/12'
    }

    const columnStyles: { [key: string]: string } = {
        'Name': 'text-sm font-semibold ',
        'Category': 'text-sm  font-medium',
        'Watchlists': 'text-sm font-medium',
        'Owner': 'text-sm font-medium',
        'PremierDate': 'text-sm font-medium',
        'Streams': 'text-sm font-medium',
        'ReleaseDate': 'text-sm font-medium',

      }
  return (
    <div>
        <table className="w-full ">
            <thead>
                <tr className="px-4 h-[50px] bg-[#F5F5F5]">
                    {columns.map((column) => (
                       <th
                       key={column.key}
                       className={`p-2  text-sm  text-[#000000] text-left ${columnWidths[column.key] || "w-auto"}`}
                     >
                            {column.title}
                        </th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map((column) => (
                            <td key={column.key} className={`p-2   ${columnStyles[column.key] || ''}`}>
                                
                                {row[column.key]}
                            </td>
                        ))}
                    </tr>
                ))}

            
            </tbody>
        </table>
    </div>
  )
}

export default Table