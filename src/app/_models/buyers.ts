import { Role } from "./role";

export class Buyers {
    id: number;
    role: Role.Buyer;
    first_name: string;
    last_name: string;
    phone: number;
    address: string;
    email: string;
    api_token: string;
}