import React from 'react';
import springImage from "@assets/images/spring.png";
import styles from '@assets/styles/todoListStyles.module.scss';
const Header = () => {
    // @ts-ignore
    return (
        <div className={styles.spring}>
            <img src={springImage} alt={"노트 상단 고정"}/>
        </div>
    );
};

export default Header;