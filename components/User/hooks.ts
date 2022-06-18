import useSWR from "swr";
import api from "./api";
import { IUser } from "./types";

const fetchUser = () => api.getUser();

export const useUserInfo = () => {
  const { data, error } = useSWR("userProfile", fetchUser);

  return {
    user: data as IUser,
    isLoading: !error && !data,
    error: error,
  };
};
