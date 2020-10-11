import React, { useState, useEffect } from 'react'
import styles from './counter.less'

const Counter03: React.FC = () => {

  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(()=>{
      setCount(c => c + 1)
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  }, [])

  return (
    <div className={styles.counter}>
      <div className={styles.displayer}>Count:{count}</div>
    </div>
  )

};

export default Counter03;