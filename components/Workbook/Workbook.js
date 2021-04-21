import React from 'react';
import styles from './Workbook.module.css';

const Workbook = () => {
    return (
        <div className={styles.container}>
            <img
                src='https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80'
                className={styles._image}
            />

            <div className={styles._text}>
                <h3 className={styles.heading}>Description</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <h3>Question and Answer</h3>
                <textarea rows='8' className={styles._textarea}>
                    Enter your Answer.
                </textarea>
            </div>
        </div>
    );
};

export default Workbook;
