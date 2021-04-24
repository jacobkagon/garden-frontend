import React, { useEffect, useState } from 'react';
import styles from './GoalMOdal.module.css';
import Button from '@/components/Button/Button';
import axios from 'axios';
import { Modal, useModal, ModalTransition } from 'react-simple-hook-modal';
import 'react-simple-hook-modal/dist/styles.css';

const GoalModal = ({ id, goalTask, fetchData }) => {
    const { isModalOpen, openModal, closeModal } = useModal();
    const [task, setTask] = useState(goalTask);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .patch(`/goals/${id}`, {
                task: task,
            })
            .then((response) => {
                console.log(response);
                fetchData();
                closeModal();
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <>
            <Button onClick={openModal}>
                <strong>edit</strong>
            </Button>
            <Modal
                id='goals_or_any_id'
                isOpen={isModalOpen}
                transition={ModalTransition.NONE}
            >
                <form onSubmit={(e) => handleSubmit(e)}>
                    <textarea
                        value={task}
                        className={styles.textArea}
                        placeholder='type your goals here...'
                        onChange={(event) => setTask(event.target.value)}
                    ></textarea>
                    <button type='submit'>save</button>
                </form>
                <button onClick={closeModal}>close</button>
            </Modal>
        </>
    );
};

export default GoalModal;
