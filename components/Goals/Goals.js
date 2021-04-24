import React, { useEffect, useState } from 'react';
import styles from './Goals.module.css';
import Button from '@/components/Button/Button';
import axios from 'axios';
import { Modal, useModal, ModalTransition } from 'react-simple-hook-modal';
import 'react-simple-hook-modal/dist/styles.css';
import GoalModal from '@/components/Goals/GoalModal/GoalModal';

const Goals = () => {
    const [goals, setGoals] = useState([]);
    const [goal, setGoal] = useState('');
    const { isModalOpen, openModal, closeModal } = useModal();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios
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
                    setGoal('');
                    fetchData();
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    };

    function handleChange(e) {
        setGoal(e.target.value);
    }

    return (
        <>
            <div className={styles.card}>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        placeholder='add a goal'
                        value={goal}
                        onChange={handleChange}
                    />
                    <input type='submit' value='Submit' />
                </form>
                <div className={styles.title}>
                    Goals
                    {/*  */}
                </div>
                {goals?.map((goal) => (
                    <div key={goal.id} className={styles.cardHome}>
                        <span className={styles.goalsList}>
                            <input name='isDone' type='checkbox' />

                            {goal.task}
                            <GoalModal
                                id={goal.id}
                                goalTask={goal.task}
                                fetchData={fetchData}
                            />
                        </span>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Goals;
