

export interface TableRow {
  Name: React.ReactNode;
  Category: React.ReactNode;
  Watchlists: number;
  Owner?: string;
  Streams?: number;
  PremierDate?: React.ReactNode;
  ReleaseDate?: React.ReactNode;
  Popularity?: React.ReactNode;
}

interface TableProps {
  columns: { title: string; key: keyof TableRow }[];
  data: TableRow[];
  hasPopularity: boolean;
}

const Table: React.FC<TableProps> = ({ columns, data, hasPopularity }) => {
  const columnWidths: { [key in keyof TableRow]?: string } = {
    Name: "w-3/12",
    Category: "w-2/12",
    Watchlists: "w-2/12",
    Owner: "w-2/12",
    Streams: "w-2/12",
    PremierDate: "w-3/12",
    ReleaseDate: "w-3/12",
  };

  if (hasPopularity) {
    columnWidths.Popularity = "w-2/12";
    columnWidths.Watchlists = "w-1/12";
    columnWidths.Streams = "w-1/12";
    columnWidths.Owner = "w-1/12";
  }

  const columnStyles: { [key in keyof TableRow]?: string } = {
    Name: "text-sm font-semibold",
    Category: "text-sm font-medium",
    Watchlists: "text-sm font-medium",
    Owner: "text-sm font-medium",
    PremierDate: "text-sm font-medium",
    Streams: "text-sm font-medium",
    ReleaseDate: "text-sm font-medium",
  };

  return (
    <div>
      <table className="w-full">
        <thead>
          <tr className="px-4 h-[50px] bg-[#F5F5F5]">
            {columns.map((column) => (
              <th
                key={column.key}
                className={`p-2 text-sm text-[#000000] text-left ${
                  columnWidths[column.key] || "w-auto"
                }`}
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
                <td
                  key={column.key}
                  className={`p-2 ${columnStyles[column.key] || ""}`}
                >
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

export default Table;
