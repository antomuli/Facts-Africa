import { Role } from "./role";

export class User {
  id: number;
  role: Role;
  first_name: string;
  last_name: string;
  phone: number;
  address: string;
  email: string;
  api_token: string;
}
