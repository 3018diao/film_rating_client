import React, { Component } from 'react';
import styles from './counter.less'
interface CounterProps {

}

interface CounterState {
  count: number;
}

class Counter01 extends Component<CounterProps, CounterState> {

  state: CounterState = {
    count: 0
  }

  constructor(props: CounterProps) {
    super(props);
  }

  increase = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrease = () => {
    this.setState({
      count: this.state.count - 1
    });
  }

  reset = () => {
    this.setState({
      count: 0
    });
  }


  render() {
    return (
      <div className={styles.counter}>
        <div className={styles.displayer}>Count:{this.state.count}</div>
        <div className={styles.btns}>
          <button onClick={this.increase}>add</button>
          <button onClick={this.decrease}>sub</button>
          <button onClick={this.reset}>reset</button>
        </div>
      </div>
    )
  }
}

export default Counter01;