import React, { useEffect, useState } from 'react';
import styles from './GoalModal.module.css';
import Button from '@/components/Button/Button';
import axios from 'axios';
import { Modal, useModal, ModalTransition } from 'react-simple-hook-modal';
import 'react-simple-hook-modal/dist/styles.css';
import { GrEdit } from 'react-icons/gr';
import { BsTrash } from 'react-icons/bs';

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

    const deleteTask = () => {
        axios
            .delete(`/goals/${id}`)
            .then((response) => {
                console.log(response);
                fetchData();
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <>
            <div className={styles.btnWrapper}>
                <button onClick={openModal} className={styles.btnEdit}>
                    <GrEdit />
                </button>
                <button onClick={deleteTask} className={styles.btnDelete}>
                    <BsTrash />
                </button>
            </div>
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
                    <button type='submit'>submit</button>
                </form>
                <button onClick={closeModal}>close</button>
            </Modal>
        </>
    );
};

export default GoalModal;
