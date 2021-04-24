import React, { useState, useEffect } from 'react';
import styles from './Prompt.module.css';
import axios from 'axios';
import ReadMoreReact from 'read-more-react';
// import { Modal, useModal, ModalTransition } from 'react-simple-hook-modal';
// import 'react-simple-hook-modal/dist/styles.css';
import GoalModal from '@/components/Goals/GoalModal/GoalModal';
import 'react-simple-hook-modal/dist/styles.css';

const Prompt = () => {
    const [answers, setAnswers] = useState([]);
    const [modal, setModal] = useState(false);    // let theDate = new Date(answers.created_at);
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

    function callModal() {
         <GoalModal/>

    }



    console.log(answers);
    return (

        
        <div className={styles.wrapper}>
        {modal ? <GoalModal/> : null}
            <div className={styles.title}>Latest Entries</div>
            <div className={styles.promptsWrapper}>
                {answers.map((answer) => (
                    <div key={answer.id} className={styles.prompt}>
                        <div className={styles.promptQuestion}>
                            {answer.question_prompt.question}
                        </div>
                        <div className={styles.promptAnswer}>
                         {answer.answer?.split(" ").slice(0, 2).join(" ")}
                        </div>
                        <button onClick={ () => setModal(true)}>
                            Read More
                        </button>
                        {/* <button onClick={() => answer.answer}>Read More...</button> */}
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
