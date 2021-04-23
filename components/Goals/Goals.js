import React, { useEffect, useState } from 'react';
import styles from './Goals.module.css';
import Button from '@/components/Button/Button';
import axios from 'axios';
import { Modal, useModal, ModalTransition } from 'react-simple-hook-modal';
import 'react-simple-hook-modal/dist/styles.css';

const Goals = () => {
    const [goals, setGoals] = useState([]);
    const [goal, setGoal] = useState('');
    const { isModalOpen, openModal, closeModal } = useModal();

    useEffect(() => {
        fetchData();
    }, [isModalOpen]);

    const fetchData = () => {
        const result = axios
            .get('/goals_by_user')
            .then((response) => {
                // console.log(response.data.goals);
                setGoals(response.data.goals);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (goal !== '') {
            axios
                .post('/goals', {
                    task: goal,
                })
                .then((response) => {
                    console.log(response);
                })
                .catch((err) => {
                    console.error(err);
                });
        }
        document.getElementsByTagName('form')[0].reset();
    };

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
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <textarea
                            className={styles.textArea}
                            placeholder='type your goals here...'
                            onChange={(event) => setGoal(event.target.value)}
                        ></textarea>
                        <button type='submit'>save</button>
                    </form>
                    <button onClick={closeModal}>close</button>
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
