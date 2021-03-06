import React, { useState, useEffect } from 'react';
import styles from './Prompt.module.css';
import axios from 'axios';
import PromptModal from './PromptModal/PromptModal';

const Prompt = () => {
    const [answers, setAnswers] = useState([]);

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
        <div className={styles.wrapper}>
            {/* {modal ? <GoalModal/> : null} */}
            <div className={styles.title}>Latest Entries</div>
            <div className={styles.promptsWrapper}>
                {answers.map((answer) => (
                    <div key={answer.id} className={styles.prompt}>
                        <div className={styles.promptQuestion}>
                            {answer.question_prompt.question
                                ?.split(' ')
                                .slice(0, 8)
                                .join(' ')}
                            ...
                        </div>
                        <div className={styles.promptAnswer}>
                            {answer.answer?.split(' ').slice(0, 10).join(' ')}
                            ...
                        </div>

                        <PromptModal answer={answer} />
                        <div className={styles.promptFooter}>
                            <div style={{ textAlign: 'right' }}>
                                {answer.question_prompt.topic}
                            </div>
                            <div style={{ textAlign: 'right' }}>
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
