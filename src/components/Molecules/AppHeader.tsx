import React from 'react';
import styles from "@assets/styles/todoListStyles.module.scss";

const AppHeader = () => {
    const date = new Date();
    const monthAbbreviations = [
        'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
        'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
    ];
    return (
        <div className={styles.app_header}>
            <div className={styles.date_area}>
                <div className={styles.left_col}>
                    <div className={styles.day_area}>
                        {date.getDay()}
                    </div>
                </div>
                <div className={styles.right_col}>
                    <div className={styles.month_area}>
                        {monthAbbreviations[date.getMonth()]}
                    </div>
                    <div className={styles.year_area}>
                        {date.getFullYear()}
                    </div>
                </div>
            </div>
            <div className={styles.title}>TODO LIST</div>
        </div>
    );
};

export default AppHeader;