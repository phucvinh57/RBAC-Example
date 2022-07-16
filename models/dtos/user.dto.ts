import { RowDataPacket } from "mysql2";

export default class UserDto {
    id: number;
    name: string;
    role: string | null;
    permission: { resource: string | null, action: string | null }[];

    constructor(queryData: RowDataPacket[]) {
        this.id = queryData[0].user_id;
        this.name = queryData[0].user_name;
        this.role = queryData[0].role_name;
        this.permission = queryData.map(row => ({
            resource: row.resource_name, 
            action: row.action_name
        }))
    }
}