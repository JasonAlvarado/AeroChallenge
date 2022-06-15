import { createContext, useContext } from "react";
import { mutate } from "swr";
import api from "./api";
import { useUserInfo } from "./hooks";
import { UserContext } from "./types";

const userContext = createContext({} as UserContext);

// react 18 change
interface Props {
  children?: React.ReactNode;
}

export const ProvideUser: React.FC<Props> = ({ children }) => {
  const user = useProvideUser();

  return <userContext.Provider value={user}>{children}</userContext.Provider>;
};

export const useUser = () => {
  return useContext(userContext);
};

function useProvideUser() {
  const { user, isLoading, error } = useUserInfo();

  const handleAddPoints = async (amount: number) => {
    try {
      await api.addPoints(amount);

      mutate("userProfile");

      return true;
    } catch (e) {
      console.error(e);

      return false;
    }
  };

  return {
    user,
    isLoading,
    error,
    handleAddPoints,
  };
}
