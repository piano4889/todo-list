import React from 'react';
import styles from "@assets/styles/todoListStyles.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons";
import {useRecoilState, useSetRecoilState} from "recoil";
import {TodoItemListState, TodoListInputState} from "@/utils/atoms/atoms";
import {v4} from "uuid";

const TodoForm = () => {

    const [inputValue, setInputValue] = useRecoilState(TodoListInputState);
    const setTodo = useSetRecoilState(TodoItemListState);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value);
    }

    const onClickHandler = () => {

        if (inputValue.trim() === '') {
            return
        }

        setTodo((prev) => {
            const newTodo = {
                id: v4(),
                content:inputValue,
                completed:false,
                important:false,
                order:prev.length // list의 length를 이용해서 order 설정
            }
            return [...prev, newTodo]
        })

        setInputValue('');
    }
    return (
        <div className={styles.content}>
            <form className={styles.TodoAdd} onSubmit={event => event.preventDefault()}>
                <input
                    onChange={onChangeHandler}
                    value={inputValue}
                    placeholder={"추가할 할 일을 입력하세요."}/>
                <button onClick={onClickHandler} type={'button'}>
                    <FontAwesomeIcon icon={faCirclePlus}/>
                </button>
            </form>
        </div>
    );
};

export default TodoForm;