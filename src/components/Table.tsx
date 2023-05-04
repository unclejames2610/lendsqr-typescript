import React, { FC, useContext, useMemo, useEffect, useState } from "react";
import { IUserContext, UserContext } from "./UserContext";
import { IUser } from "./interface";
import {
  MdOutlineFilterList,
  MdOutlineKeyboardArrowRight,
  MdKeyboardArrowLeft,
} from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { SlOptionsVertical } from "react-icons/sl";

interface IColumn {
  accessor: string;
  label: string;
}

const Table: FC = () => {
  const { users, setUsers } = useContext(UserContext) as IUserContext;

  const [status, setStatus] = useState<string>("Inactive");

  useEffect(() => {
    const updatedUsers = users.map((user) => ({ ...user, status: status }));
    setUsers(updatedUsers);
  }, [users, status]);

  const rows: IUser[] = users;

  const columns: IColumn[] = [
    { accessor: "orgName", label: "ORGANIZATION" },
    { accessor: "userName", label: "USERNAME" },
    { accessor: "email", label: "EMAIL" },
    { accessor: "phoneNumber", label: "PHONE NUMBER" },
    { accessor: "createdAt", label: "DATE JOINED" },
    { accessor: "status", label: "STATUS" },
  ];

  const [activePage, setActivePage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const count = rows.length;
  const totalPages = Math.ceil(count / rowsPerPage);

  const calculatedRows = useMemo(() => {
    return rows.slice((activePage - 1) * rowsPerPage, activePage * rowsPerPage);
  }, [rows, activePage, rowsPerPage]);

  const beginning = activePage === 1 ? 1 : rowsPerPage * (activePage - 1) + 1;
  const end = activePage === totalPages ? count : beginning + rowsPerPage - 1;

  const [showDiv, setShowDiv] = useState<boolean>(false);

  const handleTab = () => {
    setShowDiv(!showDiv);
  };

  return (
    <div className="mt-12">
      <table className="overflow-auto border rounded border-dark-blue/[0.06] shadow-[0_3px_5px_20px_rgba(0,0,0,0.04)] w-full ">
        <thead>
          <tr className="text-xs text-light-gray leading-[14px] font-semibold ">
            {columns.map((column) => {
              return (
                <th key={column.accessor} className="p-4 border">
                  {column.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {calculatedRows.map((row) => {
            return (
              <tr
                key={row.id}
                className="text-light-gray text-sm leading-4 border-b border-b-dark-blue/10"
              >
                {columns.map((column) => {
                  if (column.accessor === "status") {
                    return (
                      <td
                        key={column.accessor}
                        className="p-6 flex justify-between gap-4"
                      >
                        {row[column.accessor]}
                        <span className="cursor-pointer">
                          <SlOptionsVertical />
                        </span>
                      </td>
                    );
                  }
                  return (
                    <td key={column.accessor} className="p-6 border">
                      {row[column.accessor]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-between mt-6">
        <div>
          <p className="flex justify-between gap-2 text-light-gray text-sm font-normal">
            Showing
            <span className="flex border border-none rounded  items-center gap-3 bg-dark-blue/10 pl-2 relative">
              <span className="text-dark-blue">{rowsPerPage}</span>
              <span
                className="cursor-pointer text-2xl text-dark-blue"
                onClick={handleTab}
              >
                <RiArrowDropDownLine />
              </span>
              {showDiv && (
                <div className="bg-dark-blue/10 border border-none rounded-t-none rounded items-center flex flex-col gap-2 absolute top-6 p-2 left-0 text-dark-blue">
                  <p
                    className="cursor-pointer"
                    onClick={() => {
                      setRowsPerPage(5);
                      handleTab();
                    }}
                  >
                    5
                  </p>
                  <p
                    className="cursor-pointer"
                    onClick={() => {
                      setRowsPerPage(10);
                      handleTab();
                    }}
                  >
                    10
                  </p>
                  <p
                    className="cursor-pointer"
                    onClick={() => {
                      setRowsPerPage(15);
                      handleTab();
                    }}
                  >
                    15
                  </p>
                  <p
                    className="cursor-pointer"
                    onClick={() => {
                      setRowsPerPage(20);
                      handleTab();
                    }}
                  >
                    20
                  </p>
                </div>
              )}
            </span>
            out of {count}
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <button
            disabled={activePage === 1}
            onClick={() => setActivePage(activePage - 1)}
            className="disabled:text-dark-blue/20 bg-dark-blue/10"
          >
            <MdKeyboardArrowLeft className="cursor-pointer text-2xl text-dark-blue" />
          </button>
          <p className="text-light-gray text-base">{activePage}</p>

          <p className="text-light-gray text-base">of</p>

          <p className="text-light-gray text-base">{totalPages}</p>

          <button
            disabled={activePage === totalPages}
            onClick={() => setActivePage(activePage + 1)}
            className="disabled:text-dark-blue/20 bg-dark-blue/20"
          >
            <MdOutlineKeyboardArrowRight className="cursor-pointer text-2xl text-dark-blue " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
