import { Context, createContext } from "react";
// Import models
import { User } from "../models/interfaces/user";

export const AuthContext: Context<User> = createContext();
