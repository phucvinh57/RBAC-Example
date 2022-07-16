import { RowDataPacket } from "mysql2";

export default class UserDto {
    id: number;
    name: string;

    constructor(queryData: RowDataPacket) {
        this.id = queryData.id;
        this.name = queryData.name
    }
}