import React from 'react';
import styles from './App.css';

export default class App extends React.Component {
  render(){
    return (
        <div className={styles.container}>
          <h1 className={styles.title}>Hello World!</h1>
        </div>
    );
  }
}
