import { IProduct } from "../Products/types";

export interface IUser {
  id: string;
  name: string;
  points: number;
  redeemHistory: IProduct[];
  createDate: string;
}

export interface UserContext {
  user: IUser;
  isLoading: boolean;
  error: Error | undefined;
  handleAddPoints: (amount: number) => Promise<boolean>;
}
