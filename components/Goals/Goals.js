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
    // const [isDone, setIsDone] = useState('goal.is_done');
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

    function handleInputChange(e, id, isDone) {
        e.preventDefault();
        axios
            .patch(`/goals/${id}`, {
                is_done: !isDone,
            })
            .then((response) => {
                console.log(response);
                fetchData();
            })
            .catch((err) => {
                console.error(err);
            });
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Goals</div>
            <div className={styles.tasksWrapper}>
                {goals?.map((goal) => (
                    <div key={goal.id} className={styles.task}>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <input
                                name='isDone'
                                checked={goal.is_done}
                                type='checkbox'
                                onChange={(e) =>
                                    handleInputChange(e, goal.id, goal.is_done)
                                }
                            />
                            <div
                                style={{ marginLeft: '5px' }}
                                className={
                                    goal.is_done ? styles.taskDone : null
                                }
                            >
                                {goal.task}
                            </div>
                        </div>
                        <GoalModal
                            id={goal.id}
                            goalTask={goal.task}
                            fetchData={fetchData}
                        />
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit} className={styles.taskForm}>
                <input
                    type='text'
                    placeholder='add a goal'
                    value={goal}
                    onChange={handleChange}
                    className={styles.inputTask}
                />
                <input
                    type='submit'
                    value='Submit'
                    className={styles.btnSubmit}
                />
            </form>
        </div>
    );
};

export default Goals;
