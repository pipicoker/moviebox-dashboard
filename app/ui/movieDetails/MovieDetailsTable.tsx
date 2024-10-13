import React from 'react';

interface TableProps {
    columns: { title: string; key: string }[];
    data: Record<string, any>[];
}

const MovieDetailsTable: React.FC<TableProps> = ({ columns, data }) => {
    // Calculate the width for each column based on the number of columns
    const columnWidth = `${100 / columns.length}%`;

    const columnStyles: { [key: string]: string } = {
        'Name': 'text-sm font-semibold',
        'Category': 'text-sm font-medium',
        'Watchlists': 'text-sm font-medium',
        'Owner': 'text-sm font-medium',
        'PremierDate': 'text-sm font-medium',
        'Streams': 'text-sm font-medium',
        'ReleaseDate': 'text-sm font-medium',
    };

    return (
        <div className='border mt-8 rounded-lg'>
            <table className="w-full">
                <thead>
                    <tr className="px-4 h-[50px] bg-[#F5F5F5]">
                        {columns.map((column) => (
                            <th
                                key={column.key}
                                className="p-2 text-sm text-[#000000] text-left"
                                style={{ width: columnWidth }} // Set equal width for each header
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
                                <td key={column.key} className={`p-2 text-black ${columnStyles[column.title]}`} style={{ width: columnWidth }}>
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
