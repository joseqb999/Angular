import { Role } from "./role";

export class User {
    id: number;
    name: string;
    emailAddress: string;
    role: Role;
    token?: string;
    expiration?: Date;
}