import React, { useEffect, useState } from 'react';
import styles from './PromptModal.module.css';
import Button from '@/components/Button/Button';
import axios from 'axios';
import { Modal, useModal, ModalTransition } from 'react-simple-hook-modal';
import 'react-simple-hook-modal/dist/styles.css';

import { ImCross } from 'react-icons/im';

const PromptModal = ({ answer }) => {
    const { isModalOpen, openModal, closeModal } = useModal();
    // const [entry, setEntry] = useState();

    return (
        <div className={styles.prompt}>
            <button onClick={openModal} className={styles.btnOpenModal}>
                Read More
            </button>
            <Modal
                id='modal_or_any_id'
                isOpen={isModalOpen}
                transition={ModalTransition.NONE}
            >
                <div
                    style={{
                        textAlign: 'right',
                        marginBottom: '20px',
                    }}
                >
                    <button onClick={closeModal} className={styles.btnClose}>
                        <ImCross />
                    </button>
                </div>
                <div className={styles.promptQuestion}>
                    {answer.question_prompt.question}
                </div>
                <div className={styles.promptAnswer}>{answer.answer}</div>
                <div className={styles.promptFooter}>
                    <div style={{ textAlign: 'right' }}>
                        {answer.question_prompt.topic}
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        {new Date(answer.created_at).toDateString()}
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default PromptModal;
