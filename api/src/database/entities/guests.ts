import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('guests')
export class Guest {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "first_name", type: "varchar" })
    firstname: string;

    @Column({ name: "last_name", type: "varchar" })
    lastname: string;

    @Column({ name: "email", type: "varchar" })
    email: string;

    @Column({ name: "cpf", type: "varchar" })
    cpf: string;

    @Column({ name: "phone", type: "varchar" })
    phone: string;

    @Column({ name: "event_table", type: "varchar" })
    eventTable: string;

    @Column({ name: "checkin", type: "boolean"})
    checkin: boolean;
}