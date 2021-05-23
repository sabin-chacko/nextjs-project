export declare class updateTodoDto {
    todo_item: string;
    status: string;
    User_id: string;
}
export declare class todoitemdto {
    todo_item: string;
    status: string;
    User_id: string;
    constructor(updateTodoDto: updateTodoDto, userid: string);
}
