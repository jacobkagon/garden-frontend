import React, { useState, useEffect } from 'react';
import styles from './Workbook.module.css';
import axios from 'axios';

const Workbook = ({ number }) => {
    const [question, setQuestion] = useState('');
    const [questionChange, setQuestionChange] = useState('');
    const [description, setDescription] = useState(" ");
    //www.educative.io/edpresso/how-to-make-a-modal-using-css-html-and-javascript

    https: useEffect(() => {
      
        axios
            .get(`/questions_prompt/${number}`)
            .then((response) => {
                setQuestion(response.data.question);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    return (
        <div className={styles.container}>
            <img
                src='https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80'
                className={styles._image}
            />

            <div className={styles._text}>
                <h3 className={styles.heading}>Description</h3>
                <p className={styles.font}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                </p>

                <h3 className={styles.heading}>{question}</h3>

                <textarea
                    rows='8'
                    className={styles._textarea}
                    placeholder='Your Answer'
                ></textarea>
            </div>
        </div>
    );
};

export default Workbook;
