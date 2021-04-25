import React, { useState, useEffect } from 'react';
import styles from './Prompt.module.css';
import axios from 'axios';
// import ReadMoreReact from 'read-more-react';
import { Modal, useModal, ModalTransition } from 'react-simple-hook-modal';
import 'react-simple-hook-modal/dist/styles.css';
import { ImCross } from 'react-icons/im';

const Prompt = () => {
    const [answers, setAnswers] = useState([]);
    // const [modal, setModal] = useState(false);    // let theDate = new Date(answers.created_at);
    const { isModalOpen, openModal, closeModal } = useModal();
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

    // function callModal() {
    //      <GoalModal/>

    // }

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
                        </div>
                        <div className={styles.promptAnswer}>
                            {answer.answer?.split(' ').slice(0, 10).join(' ')}
                        </div>
                        <button onClick={openModal}>Read More</button>
                        <Modal
                            id='goals_or_any_id'
                            isOpen={isModalOpen}
                            transition={ModalTransition.NONE}
                        >
                            <button
                                onClick={closeModal}
                                className={styles.btnClose}
                            >
                                <ImCross />
                            </button>
                            <div className={styles.promptQuestion}>
                                {answer.question_prompt.question}
                            </div>
                            <div className={styles.promptAnswer}>
                                {answer.answer}
                            </div>
                            <div className={styles.promptFooter}>
                                <div style={{ textAlign: 'right' }}>
                                    {answer.question_prompt.topic}
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    {new Date(answer.created_at).toDateString()}
                                </div>
                            </div>
                        </Modal>
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
