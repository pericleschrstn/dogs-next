"use client";

import React from "react";

type IUserContext = {
  user: User | null;
  setUserContext: React.Dispatch<React.SetStateAction<User | null>>;
};

type User = {
  id: number;
  email: string;
  nome: string;
  username: string;
};

const UserContext = React.createContext<IUserContext | null>(null);

export const useUser = () => {
  const context = React.useContext(UserContext);
  if (context === null) {
    throw new Error("useContext deve estar dentro do Provider");
  }
  return context;
};

export function UserContextProvider({ children, user }: { children: React.ReactNode; user: User | null }) {
  const [userContext, setUserContext] = React.useState<User | null>(user);
  return <UserContext.Provider value={{ user: userContext, setUserContext }}>{children}</UserContext.Provider>;
}
