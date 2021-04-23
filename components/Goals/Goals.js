import React, { useEffect, useState } from 'react';
import styles from './Goals.module.css';
import Button from '@/components/Button/Button';
import axios from 'axios';
import { Modal, useModal, ModalTransition } from 'react-simple-hook-modal';
import 'react-simple-hook-modal/dist/styles.css';

const Goals = () => {
    const [goals, setGoals] = useState([]);
    const { isModalOpen, openModal, closeModal } = useModal();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        const result = axios.get('/goals').then((response) => {
            console.log(response.data.goals);
            setGoals(response.data.goals);
        });
    };

    const addGoals = () => {};

    return (
        <div className={styles.card}>
            <div className={styles.title}>
                Goals
                <Button onClick={openModal}>
                    <strong>add</strong>
                </Button>
                <Modal
                    id='goals_or_any_id'
                    isOpen={isModalOpen}
                    transition={ModalTransition.NONE}
                >
                    <textarea
                        className={styles.textArea}
                        placeholder='type your goals here...'
                    ></textarea>
                    <Button onClick={null}>save</Button>
                    <br />
                    <Button onClick={closeModal}>close</Button>
                </Modal>
            </div>
            {goals?.map((goal) => (
                <div key={goal.id} className={styles.cardHome}>
                    <span className={styles.goalsList}>
                        <input name='isDone' type='checkbox' />{' '}
                        <a href='/explore'>{goal.task}</a>
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Goals;
