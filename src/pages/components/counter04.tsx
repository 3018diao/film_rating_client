import React, { useCallback, useState, useRef } from 'react';
import styles from './counter.less';

const Counter04: React.FC = () => {

  const [count, setCount] = useState<number>(0);

  let timer = useRef<any>();

  const start = useCallback(() => {
    if (!timer.current) {
      timer.current = setInterval(() => {
        setCount(c => c + 1)
      }, 1000);
    }
  }, []);

  const pause = useCallback(() => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
  }, []);

  const reset = useCallback(() => {
    pause();
    setCount(0);
  }, []);

  return (
    <div className={styles.counter}>
      <div className={styles.displayer}>Count:{count}</div>
      <div className={styles.btns}>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default Counter04;