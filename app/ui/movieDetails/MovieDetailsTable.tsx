export interface DetailsTableRow {
    Category?: React.ReactNode;
    Watchlists?: number;
    Owner?: string;
    Streams?: number;
    PeopleReached?: number;
    ContentInteractions?: number;
    Impressions?: number;
    Shares?: number;
    Likes?: number;
    ReleaseDate?: React.ReactNode;
  }

interface TableProps {
  columns: { title: string; key: keyof DetailsTableRow }[];
  data: DetailsTableRow[];
}

const MovieDetailsTable: React.FC<TableProps> = ({ columns, data }) => {
    // Calculate the width for each column based on the number of columns
    const columnWidth = `${100 / columns.length}%`;
    
    return (
        <div className='border mt-8 rounded-lg'>
            <table className="w-full">
                <thead className="border-b">
                    <tr className="px-4 h-[50px] bg-[#F5F5F5]">
                        {columns.map((column) => (
                            <th
                                key={column.key}
                                className="p-2 text-sm font-semibold  text-[#000000] text-left"
                                style={{ width: columnWidth }} // Set equal width for each header
                            >
                                {column.title}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className="text-sm text-gray-400">
                            {columns.map((column) => (
                                <td key={column.key} className={`p-4 text-black `} style={{ width: columnWidth }}>
                                    {row[column.key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MovieDetailsTable;
