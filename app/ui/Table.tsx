
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
  columns: { title: string | JSX.Element; key: keyof TableRow }[];
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

  

  return (
    <div>
      <table className="w-full">
        <thead className="border-b">
          <tr className="px-4 h-[50px] bg-[#F5F5F5]">
            {columns.map((column) => (
              <th
                key={column.key}
                className={`p-4 text-sm font-semibold text-[#000000] text-left ${
                  columnWidths[column.key] || "w-auto"
                }`}
              >
                {typeof column.title === 'string' ? column.title : column.title}
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
                  className="p-4 border-b text-sm "
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
