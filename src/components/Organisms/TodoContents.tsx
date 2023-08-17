import React from 'react';
import styles from '@assets/styles/todoListStyles.module.scss'
import AppHeader from "@/components/Molecules/AppHeader";
import TodoForm from "@/components/Molecules/TodoForm";
import TodoList from "@/components/Molecules/TodoList";
import {useRecoilValue} from "recoil";
import {TodoItemListState} from "@/utils/atoms/atoms";

const TodoContents = () => {
    const todoItems = useRecoilValue(TodoItemListState);

    return (
        <div className={styles.TodoTemplate}>
            <AppHeader/>
            <TodoForm/>
            <TodoList items={todoItems}/>
        </div>
    );
};

export default TodoContents;