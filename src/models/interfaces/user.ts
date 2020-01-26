import { Auth } from "./auth";

export interface User extends Auth {
  name: string;
  lastName: string;
  userName: string;
  email: string;
  phone: string;
  avatar: string;
  country: string;
  countryId: number;
  cityId: number;
  cityName: string;
  iso: string;
}
