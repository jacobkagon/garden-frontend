import React from 'react';
import styles from './Welcome.module.css';

const Welcome = () => {
  return (
    <div>
      <h1 className={styles.header}>The Garden</h1>
      <hr />
      <p>A place to discover and explore our differences</p>
    </div>
  );
};

export default Welcome;
