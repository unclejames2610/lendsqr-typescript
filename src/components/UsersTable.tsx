import React, { FC, useContext, useMemo, useEffect } from "react";
import { IUserContext, UserContext } from "./UserContext";
import { Column, useTable } from "react-table";
import { IUser } from "./interface";
import { MdOutlineFilterList } from "react-icons/md";

const UsersTable: FC = () => {
  const { users, setUsers } = useContext(UserContext) as IUserContext;

  // useEffect(() => {
  //   // Map through the users array and convert createdAt to Date object
  //   if (users) {
  //     const updatedUsers: IUser[] = users.map((user: IUser) => {
  //       const date: Date = new Date(user.createdAt);
  //       return { ...user, createdAt: date.toISOString() };
  //     });

  //     setUsers(updatedUsers);
  //   }
  // }, [users]);

  const data: IUser[] = useMemo(() => users, [users]);

  //   interface IColumn {
  //     Header: string;
  //     accessor: string;
  //   }

  const columns: Column<IUser>[] = useMemo(
    () => [
      { Header: "ORGANIZATION", accessor: "orgName" },
      { Header: "USERNAME", accessor: "userName" },
      { Header: "EMAIL", accessor: "email" },
      { Header: "PHONE NUMBER", accessor: "phoneNumber" },
      { Header: "DATE JOINED", accessor: "createdAt" },
      //   { Header: "STATUS", accessor: "Inactive" },
    ],
    [users]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="max-w-full mt-12">
      <table className="text-sm" {...getTableProps()}>
        <thead className="text-dark-blue ">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th className="relative" {...column.getHeaderProps()}>
                  {column.render("Header")}
                  <span className="absolute top-3 right-0">
                    <MdOutlineFilterList />
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="text-light-gray" {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr className="border-b border-light-gray" {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td className="p-4 " {...cell.getCellProps()}>
                    {" "}
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
