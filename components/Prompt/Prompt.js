import React from 'react';
import styles from './Prompt.module.css';

const Prompt = () => {
    return (
        <div>
            <div className={styles.card}>
                <div className={styles.title}>Prompts</div>
                <div className={styles.cardHome}>
                    <div className={styles.questionsList}>
                        Do you understanding CSS, you think you do but you
                        don't?
                        <span className={styles.answersList}>
                            <a href='/explore'>
                                "this will be a long string of words that don't
                                mean anything at all"
                            </a>
                        </span>
                        <div className={styles.topic}>understanding</div>
                    </div>
                    <div className={styles.questionsList}>
                        Do you understanding CSS, you think you do but you
                        don't?
                        <span className={styles.answersList}>
                            <a href='/explore'>
                                "this is a hyperlink this will normally longer
                                than this."
                            </a>
                        </span>
                        <div className={styles.topic}>understanding</div>
                    </div>
                    <div className={styles.questionsList}>
                        Do you understanding CSS, you think you do but you
                        don't?
                        <span className={styles.answersList}>
                            <a href='/explore'>
                                "this is a hyperlink this will normally longer
                                than this."
                            </a>
                        </span>
                        <div className={styles.topic}>understanding</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Prompt;
