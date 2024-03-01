import {useSelector, useDispatch} from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispach = useDispatch();
  const counter = useSelector(state => state.counter);

  const incrmentHandler = ()=>{
    dispach({type: 'increment'});
  };
  const decrementHandler = () =>{
    dispach({type: "decrement"})
  }
  const amountHandler = () => {
    dispach({type: 'amount'})
  }


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrmentHandler}>increment</button>
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={amountHandler}>increes by 5</button>
      </div>
     
    </main>
  );
};

export default Counter;
