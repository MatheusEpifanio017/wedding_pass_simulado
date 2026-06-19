import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UserRole } from "./enum/userRole";

@Entity('users') 
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "email", type: "varchar" })
    email: string;

    @Column({ name: "password", type: "varchar" })
    password: string;

    @Column({ name: "first_name", type: "varchar" })
    firstname: string;

    @Column({ name: "last_name", type: "varchar" })
    lastname: string;

    @Column({ name: "cpf", type: "varchar" })
    cpf: string;

    @Column({ name: "role", type: "enum", enum: UserRole})
    role: UserRole;
};