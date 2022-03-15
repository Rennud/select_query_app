import React, { useState } from "react";

export default function Datatable(props: any) {
  const { data } = props;
  const columns = data[0] && Object.keys(data[0]);
  return (
    <table cellPadding={0} cellSpacing={0}>
      <thead>
        <tr>
          {data[0] && columns.map((heading: string) => <th>{heading}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map(
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
  );
}
