import React, { useState, useEffect } from 'react';
import styles from './Workbook.module.css';
import axios from 'axios';
import { useRouter } from 'next/router';
import Button from '@/components/Button/Button.js';
import Link from 'next/link'

const Workbook = () => {
    const [question, setQuestion] = useState('');
    const [questionChange, setQuestionChange] = useState('');
    const [description, setDescription] = useState(' ');
    const [userAnswer, setUserAnswer] = useState('');
    const [questionPromptId, setQuestionPromptId] = useState(0);

    const router = useRouter();
    //www.educative.io/edpresso/how-to-make-a-modal-using-css-html-and-javascript
    const number = router.query.topics;
    // console.log({ number });

    useEffect(() => {
        // console.log({ number }, "useeffect");
        axios
            .get(`/questions_prompt/${number}`)
            .then((response) => {
                setQuestion(response.data.question);
                setQuestionPromptId(response.data.id);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        const data = {};
        data.question_prompt_id = questionPromptId;
        data.answer = userAnswer;
        axios
            .post('/answers', data)
            .then(function (response) {
                console.log(response);
                // grab the jwt token
                router.push("/")
            })
            .catch(function (error) {
                console.log(error);
            });

        setUserAnswer('');
        document.getElementsByTagName('form')[0].reset();

    }

    function descript() {
        let description = null;
        number === '1'
            ? (description = 'Gratitude')
            : number === '2'
            ? (description = 'Inner Peace')
            : number === '3'
            ? (description = 'Relationships')
            : null;
        return description;
    }

    function newQuestion() {
        axios
            .get(`/questions_prompt/${number}`)
            .then((response) => {
                setQuestion(response.data.question);
                setQuestionPromptId(response.data.id);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    return (
        <div className={styles.container}>
            <img
                src='https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80'
                className={styles._image}
            />

            <div className={styles._text}>
                <h3 className={styles.heading}>{descript()}</h3>
                <div className={styles.border}>
                    {number === '1' ? (
                        <p className={styles.font}>
                            In positive psychology research, gratitude is
                            strongly and consistently associated with greater
                            happiness. Gratitude helps people feel more positive
                            emotions, relish good experiences, improve their
                            health, deal with adversity, and build strong
                            relationships. People feel and express gratitude in
                            multiple ways.
                        </p>
                    ) : number === '3' ? (
                        <p className={styles.font}>
                            Being more connected to friends, family, partners
                            and others can clear your head and boost your mood.
                            ... Whether they're friends, family members,
                            partners, mentors, colleagues or people you're just
                            getting to know, working on your relationships can
                            be great for your mental health.
                        </p>
                    ) : number === '2' ? (
                        <p className={styles.font}>
                            A state of inner peace eliminates anxieties, fears
                            and worries. It also removes negative thoughts,
                            stress, lack of satisfaction and unhappiness. It is
                            a state of emotional and mental poise, happiness,
                            confidence and inner strength. Everyone desires
                            inner peace, even if he or she is not aware of this
                            desire.
                        </p>
                    ) : null}
                </div>

                <h3 className={styles.heading}>{question}</h3>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <textarea
                        onChange={(e) => setUserAnswer(e.target.value)}
                        rows='8'
                        className={styles._textarea}
                        placeholder='Your Answer'
                    ></textarea>
                    
                    <button value='submit' className={styles.btn}>
                        Submit
                        </button>{' '}

                    <button
                        type='button'
                        className={styles.btn}
                        onClick={() => newQuestion()}
                    >
                        New Question
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Workbook;
