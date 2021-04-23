import React, { useState, useEffect } from 'react';
import styles from './Prompt.module.css';
import axios from 'axios';

const Prompt = () => {
    const [answers, setAnswers] = useState([]);
    // let theDate = new Date(answers.created_at);
    // let dateString = theDate.toDateString();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios
            .get('/answers_by_user')
            .then((response) => {
                // console.log(response);
                setAnswers(response.data.answer_prompt);
            })
            .catch((err) => {
                console.error(err);
            });
    };
    console.log(answers);
    return (
        <div>
            <div className={styles.card}>
                <div className={styles.title}>Latest Entries</div>
                {answers.map((answer) => (
                    <div key={answer.id} className={styles.cardHome}>
                        <div className={styles.questionsList}>
                            {answer.question_prompt.question}
                            <span className={styles.answersList}>
                                <a href='/explore'>{answer.answer}</a>
                            </span>
                            <div className={styles.topic}>
                                {answer.question_prompt.topic} <br />
                                {new Date(answer.created_at).toDateString()}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Prompt;
