import React from 'react';
import styles from "@assets/styles/todoListStyles.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquare, faSquareMinus, faStar} from "@fortawesome/free-regular-svg-icons";
import {TodoItem, TodoItemListState} from "@/utils/atoms/atoms";
import {useSetRecoilState} from "recoil";
import {faSquareCheck} from "@fortawesome/free-solid-svg-icons/faSquareCheck";

interface PropsType {
    items: TodoItem[]
}

const TodoList = ({items}: PropsType) => {
    //TODO 컴포넌트 분리
    const setTodoOptions = useSetRecoilState(TodoItemListState);

    const toggleCompleted = (id: string) => {
        setTodoOptions((prev) => {
            // 할 일 완료 여부 변경
            return prev.map((item) => {
                if (item.id === id) {
                    return {...item, completed: !item.completed};
                }
                return item;
            });
        });
    }

    const toggleImportant = (id: string) => {
        setTodoOptions((prev) => {
            // 기존 리스트의 아이템들을 순회하며 중요 여부와 order 값을 변경
            const updatedItems = prev.map((item) => {
                if (item.id === id) {
                    // 현재 아이템의 중요 여부를 반전하고, order 값을 음수로 변경하여 상단으로 이동시킴
                    return {...item, important: !item.important, order: -item.order};
                }
                return item; // 아이템이 변경되지 않은 경우 그대로 반환
            });

            // order 값 기준으로 배열을 정렬하여 중요도가 높은 아이템을 상단에 위치시킴
            updatedItems.sort((a, b) => a.order - b.order);

            return updatedItems; // 변경된 리스트 반환
        });
    };

    const toggleRemove = (id: string) => {
        setTodoOptions((prev) => {
            // 할 일 제거
            return prev.filter((item) => item.id !== id);
        });
    }

    return (
        <ul className={styles.TodoList}>
            {
                items.map((item) => {
                    return (
                        <li key={item.id} className={`${styles.TodoObject} ${item.completed ? styles.checked : ''}`}>
                            {/* complete 여부에 따른 스타일 */}
                            {item.completed ? (
                                <div onClick={() => toggleCompleted(item.id)}
                                     className={`${styles.checkbox} ${styles.checked}`}
                                >
                                    <FontAwesomeIcon icon={faSquareCheck}/>
                                    <div className={`${styles.text}`}>
                                        {item.content}
                                    </div>
                                </div>
                            ) : (
                                <div onClick={() => toggleCompleted(item.id)} className={styles.checkbox}>
                                    <FontAwesomeIcon icon={faSquare}/>
                                    <div className={styles.text}>
                                        {item.content}
                                    </div>
                                </div>
                            )}

                            {/* important 여부에 따른 스타일 */}
                            <div onClick={() => toggleImportant(item.id)}
                                 className={`${styles.important} ${item.important ? styles.star : ''}`}>
                                <FontAwesomeIcon icon={faStar}/>
                            </div>

                            {/* 할 일 제거 */}
                            <button onClick={() => toggleRemove(item.id)} className={styles.remove}>
                                <FontAwesomeIcon icon={faSquareMinus}/>
                            </button>
                        </li>
                    );
                })
            }
        </ul>
    );
};

export default TodoList;
