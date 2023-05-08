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
import {
  BsFilter,
  BsEye,
  BsFillPersonCheckFill,
  BsFillPersonXFill,
} from "react-icons/bs";
import { isEmpty, isString, isBoolean, isNumber, toLower } from "./helpers";
import { Link } from "react-router-dom";

interface IColumn {
  accessor: string;
  label: string;
}

const Table: FC = () => {
  // const statusElements = ["Inactive", "Active", "Pending", "Blacklisted"];

  // const getRandomElement = (): string => {
  //   const randomIndex = Math.floor(Math.random() * statusElements.length);
  //   return statusElements[randomIndex];
  // };
  const { users, setUsers } = useContext(UserContext) as IUserContext;

  const [status, setStatus] = useState<string>("Inactive");

  useEffect(() => {
    const updatedUsers = users.map((user) => ({
      ...user,
      status: status,
      // createdAt: new Date(user.createdAt).toISOString(),
    }));
    setUsers(updatedUsers);
  }, [users, status]);

  const rows: IUser[] = users;

  const columns: IColumn[] = [
    { accessor: "orgName", label: "organization" },
    { accessor: "userName", label: "username" },
    { accessor: "email", label: "email" },
    { accessor: "phoneNumber", label: "phone number" },
    { accessor: "createdAt", label: "date joined" },
    { accessor: "status", label: "status" },
  ];

  const [activePage, setActivePage] = useState<number>(1);
  const [filters, setFilters] = useState<Record<string, any>>({});
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const filteredRows = filterRows(rows, filters);
  const count: number = filteredRows.length;
  const totalPages: number = Math.ceil(count / rowsPerPage);

  const calculatedRows: IUser[] = useMemo(() => {
    return filteredRows.slice(
      (activePage - 1) * rowsPerPage,
      activePage * rowsPerPage
    );
  }, [rows, activePage, rowsPerPage]);

  const beginning: number =
    activePage === 1 ? 1 : rowsPerPage * (activePage - 1) + 1;
  const end: number =
    activePage === totalPages ? count : beginning + rowsPerPage - 1;

  const [showDiv, setShowDiv] = useState<boolean>(false);
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const handleTab = (): void => {
    setShowDiv(!showDiv);
  };

  const handleSearch = (value: any, accessor: any) => {
    setActivePage(1);

    if (value) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [accessor]: value,
      }));
    } else {
      setFilters((prevFilters) => {
        const updatedFilters = { ...prevFilters };
        delete updatedFilters[accessor];

        return updatedFilters;
      });
    }
  };

  const [clickedRowId, setClickedRowId] = useState<string | null>(null);

  const handleRowClick = (id: string) => {
    setClickedRowId(id === clickedRowId ? null : id);
  };

  function filterRows(rows: IUser[], filters: Record<string, any>) {
    if (isEmpty(filters)) return rows;

    return rows.filter((row) => {
      return Object.keys(filters).every((accessor) => {
        const value = row[accessor];
        const searchValue = filters[accessor];

        if (isString(value)) {
          return toLower(value).includes(toLower(searchValue));
        }

        if (isBoolean(value)) {
          return (
            (searchValue === "true" && value) ||
            (searchValue === "false" && !value)
          );
        }

        if (isNumber(value)) {
          return value == searchValue;
        }

        return false;
      });
    });
  }

  return (
    <div className="mt-12">
      <table className="overflow-auto border rounded border-dark-blue/[0.06] shadow-[0_3px_5px_20px_rgba(0,0,0,0.04)] w-full ">
        <thead>
          <tr className="text-xs text-light-gray leading-[14px] font-semibold">
            {columns.map((column) => {
              return (
                <th key={column.accessor} className="p-4 relative uppercase">
                  <span>{column.label}</span>
                  <span className="absolute top-3 right-0 lg:right-6 text-xl cursor-pointer">
                    <BsFilter />
                  </span>
                </th>
              );
            })}
          </tr>
          <tr className="text-xs text-light-gray leading-[14px] font-semibold">
            {columns.map((column) => {
              return (
                <th key={column.accessor}>
                  <input
                    key={`${column.accessor}-search`}
                    type="search"
                    placeholder={`Search ${column.label}`}
                    value={filters[column.accessor]}
                    onChange={(event) =>
                      handleSearch(event.target.value, column.accessor)
                    }
                    className="border border-dark-blue/20 rounded-lg p-2 focus:outline-none placeholder:text-light-gray/70 capitalize"
                  />
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
                        <span
                          className="cursor-pointer relative"
                          onClick={() => handleRowClick(row.id)}
                        >
                          <SlOptionsVertical />
                          {clickedRowId === row.id && (
                            <div className=" z-[1000] border-none p-4 rounded w-[180px] h-[130px] flex flex-col gap-4 items-center absolute right-0 top-0 bg-white shadow-[0_3px_5px_20px_rgba(0,0,0,0.04)]">
                              <Link to={`/users/${row.id}`}>
                                <p className="flex justify-center gap-2 px-2 cursor-pointer">
                                  <span>
                                    <BsEye />
                                  </span>
                                  View Details
                                </p>
                              </Link>

                              <p className="flex justify-center gap-2 ">
                                <span>
                                  <BsFillPersonXFill />
                                </span>
                                Blacklist User
                              </p>
                              <p className="flex justify-center gap-2">
                                <span>
                                  <BsFillPersonCheckFill />
                                </span>
                                Activate User
                              </p>
                            </div>
                          )}
                        </span>
                      </td>
                    );
                  }
                  return (
                    <td key={column.accessor} className="p-6 ">
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
                      setActivePage(1);
                    }}
                  >
                    5
                  </p>
                  <p
                    className="cursor-pointer"
                    onClick={() => {
                      setRowsPerPage(10);
                      handleTab();
                      setActivePage(1);
                    }}
                  >
                    10
                  </p>
                  <p
                    className="cursor-pointer"
                    onClick={() => {
                      setRowsPerPage(15);
                      handleTab();
                      setActivePage(1);
                    }}
                  >
                    15
                  </p>
                  <p
                    className="cursor-pointer"
                    onClick={() => {
                      setRowsPerPage(20);
                      handleTab();
                      setActivePage(1);
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
