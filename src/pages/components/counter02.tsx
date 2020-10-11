import React, { useState } from 'react';
import styles from './counter.less';
import { useCount, useCount2 } from '@/hooks/use-count';

const Counter02: React.FC = () => {

  // const { count, increase, decrease, reset } = useCount();
  const { count, increase, decrease, reset } = useCount2();

  return (
    <div className={styles.counter}>
      <div className={styles.displayer}>Count:{count}</div>
      <div className={styles.btns}>
        <button onClick={increase}>add</button>
        <button onClick={decrease}>sub</button>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  )
};

export default Counter02;