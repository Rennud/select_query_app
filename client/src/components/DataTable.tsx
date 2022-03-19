import React, { useState } from "react";

/* Hadnling showing table and paging */
export default function DataTable(props: any) {
  const { data, dataLimit } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / dataLimit);
  const dataLength = data.length;
  const columns = data[0] && Object.keys(data[0]);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }
  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return dataLength === 0 ? "" : data.slice(startIndex, endIndex);
  };
  if (dataLength !== 0) {
    return (
      <div>
        {/* show the posts, 5 row at a time */}
        <table cellPadding={0} cellSpacing={0}>
          <thead>
            <tr className="table-heading">
              {data[0] && columns.map((heading: string) => <th>{heading}</th>)}
            </tr>
          </thead>
          <tbody>
            {getPaginatedData().map(
              (row: {
                [x: string]:
                  | boolean
                  | React.ReactChild
                  | React.ReactFragment
                  | React.ReactPortal
                  | null
                  | undefined;
              }) => (
                <tr>
                  {columns.map((column: string | number) => (
                    <td>{row[column]}</td>
                  ))}
                </tr>
              )
            )}
          </tbody>
        </table>
        {/* cointainer that hold buttons for table */}
        <div className="pagination">
          {/* previous button */}
          <button
            onClick={goToPreviousPage}
            className={`prev ${currentPage === 1 ? "disabled" : ""}`}
          >
            Předchozí
          </button>
          {/* next button */}
          <button
            onClick={goToNextPage}
            className={`next ${currentPage === maxPage ? "disabled" : ""}`}
          >
            Další
          </button>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
