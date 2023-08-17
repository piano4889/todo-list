import {atom} from "recoil";

export interface TodoItem {
    id:string;
    content:string;
    completed:boolean;
    important:boolean;
    order:number;
}
export const TodoListInputState = atom({
    key:'todoListInput',
    default: '',
})

export const TodoItemListState = atom<TodoItem[]>({
    key:'TodoItemListState',
    default: []
})