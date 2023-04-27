import React, {
  useState,
  FC,
  ReactNode,
  createContext,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";

import { IUser } from "./interface";

export interface IUserContext {
  users: IUser[];
  setUsers: Dispatch<SetStateAction<IUser[]>>;
}

type IProps = {
  children: ReactNode;
};

export const UserContext = createContext<IUserContext | null>(null);

export const UserProvider = ({ children }: IProps) => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/"
      );
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const value: IUserContext = {
    users,
    setUsers,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// export default UserProvider;
