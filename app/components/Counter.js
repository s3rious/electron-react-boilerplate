/* @flow */
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Counter.module.css';

type Props = {
  increment: Function,
  incrementIfOdd: Function,
  incrementAsync: Function,
  decrement: Function,
  counter: number
}

class Counter extends Component {
  props: Props;

  render(): ReactElement {
    const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
    return (
      <div>
        <div className={styles.backButton}>
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={`counter ${styles.counter}`}>
          {counter}
        </div>
        <div className={styles.btnGroup}>
          <button className={styles.btn} onClick={increment}>
            <i className="fa fa-plus"></i>
          </button>
          <button className={styles.btn} onClick={decrement}>
            <i className="fa fa-minus"></i>
          </button>
          <button className={styles.btn} onClick={incrementIfOdd}>odd</button>
          <button className={styles.btn} onClick={() => incrementAsync()}>async</button>
        </div>
      </div>
    );
  }
}

export default Counter;
