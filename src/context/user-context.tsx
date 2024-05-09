"use client";

import logout from "@/actions/logout";
import validateToken from "@/actions/validate-token";
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

  React.useEffect(() => {
    async function validate() {
      const { ok } = await validateToken();
      if (!ok) await logout(); // se o token não é valido, ou seja, expirou, faz logout
    }
    if (userContext) validate(); // se existir usuário logado, faz a validação do token
  }, [userContext]);

  return <UserContext.Provider value={{ user: userContext, setUserContext }}>{children}</UserContext.Provider>;
}
